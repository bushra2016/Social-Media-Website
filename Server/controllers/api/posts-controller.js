const User = require('../../models/user-model');
const Post = require('../../models/post-model');

const get_one_post = (async (req, res) =>{
    const postId = req.params.postId;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const get_all_posts =  (async (req, res) => {
    console.log("req.body",req.body);
    
    try{
        const posts = await Post.find();
        const formattedPosts = [];
        for (const post of posts) {
            const user = await User.findById(post.postedBy);
            const post_data = {
                handle: user.username,
                username: user.firstName + " " +  user.lastName,
                content: post.content,
                createdAt: post.createdAt,
            };
            formattedPosts.push(post_data);
        }
        console.log(formattedPosts);
        res.json(formattedPosts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const send_post = (async(req ,res ,next) => {
    if(!req.body.post){
        console.log("Content param not sent with request!");
        return res.sendStatus(400);
    }
    const user = await User.findOne({ username: req.body.postedBy });
    if (!user) {
        console.log("User not found");
        return res.sendStatus(404);
    }
    var post_data = {
        content: req.body.post,
        postedBy: user._id
    }
    Post.create(post_data)
    .then( async new_post =>{
        new_post = await User.populate(new_post, { path: "postedBy" });
        res.status(201).send(new_post);
    })
    .catch((err)=>{
        console.log(err);
        res.sendStatus(400);
    });
});

//save unsave
exports.savePost=async(req,res)=>{
    const saved={
        savedBy:req.user._id,
        profilePic:req.user.pic,
        postId:req.body.postId
    }
    await Post.findByIdAndUpdate(req.body.postId,{
        $push:{saved:saved}
    },{
        new:true
    })
    .populate("postedBy","_id name pic")
    .populate("comments.postedBy","_id name pic")
    .exec((err,result)=>{
        if(err){
            return res.status(400).json({msg:"This post dose dont exist",error:err})
        }
        else{
            res.json(result)
        }
    })
}

exports.unSavePost=async(req,res)=>{
    await Post.findById(req.body.postId,{
        $pull:{
             saved:{
                savedBy:req.user._id,
                postId:req.body.postId,
                _id:req.body.savedId
            }
        }
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(400).json({msg:"This post dose dont exist",error:err})
        }
        else{
            res.json(result)
        }
    })
}


module.exports = {
    send_post,
    get_all_posts,
    get_one_post
};