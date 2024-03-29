const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const posts_controller = require('../../controllers/api/posts-controller');
const requairLogin = require('../../middlewares/require-login.js');
const {savePost,unSavePost}= require('../../controllers/api/posts-controller');

app.use(bodyParser.urlencoded({extended:false}));

router.route('/api/post')
        .get(posts_controller.get_all_posts)
        .post(posts_controller.send_post)

router.route('/api/post/:postId')
        .get(posts_controller.get_one_post);

//save unsave
postRouter.put('saved',requairLogin, savePost)
postRouter.put('unsaved',requairLogin, unSavePost)
module.exports = router;








