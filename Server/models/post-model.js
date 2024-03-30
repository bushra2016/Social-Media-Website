const mongoose =require("mongoose");

const Schema = mongoose.Schema;
const PostScheme = new Schema({
   content: { type: String ,trim: true},
   postedBy: { type: Schema.Types.ObjectId, ref: 'User'},
   pinned: { type: Boolean}
},{ timestamps:true});

var Post = mongoose.model('Post', PostScheme);

module.exports = Post;