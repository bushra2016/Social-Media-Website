const User = require('../../models/user-model');
const Post = require('../../models/post-model');

const post = (async(req ,res ,next) => {
    /*if(!req.body.content){
        console.log("Content param not sent with request!");
        return res.sendStatus(400);
    }*/
    console.log("post body:",req.body);
    var post_data = {
        content: req.body.post,
        //postedBy: req.session.username
        postedBy: req.body.postedBy
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

module.exports = {
    post
};