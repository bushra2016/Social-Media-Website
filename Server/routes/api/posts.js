const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const posts_controller = require('../../controllers/api/posts-controller');
const requairLogin = require('../../middlewares/require-login.js');
const {addComment,getAllComments,deleteComment} = require('../../controllers/api/posts-controller');
app.use(bodyParser.urlencoded({extended:false}));

router.route('/api/post')
        .get(posts_controller.get_all_posts)
        .post(posts_controller.send_post)

router.route('/api/post/:postId')
        .get(posts_controller.get_one_post);

//comments on post
postRoutre.put('/createComment',requairLogin,addComment)
postRoutre.get('/allcomments',requairLogin,getAllComments)
postRoutre.put('/deletecomment',requairLogin,deleteComment)
module.exports = router;








