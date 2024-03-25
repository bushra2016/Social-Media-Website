const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const posts_controller = require('../../controllers/api/posts-controller');
const requireLogin = require('../../middlewares/require-login');
const {likePost,unlikePost}= require('../../controllers/api/posts-controller');
app.use(bodyParser.urlencoded({extended:false}));

router.route('/api/post')
        .get(posts_controller.get_all_posts)
        .post(posts_controller.send_post)

router.route('/api/post/:postId')
        .get(posts_controller.get_one_post);
        
//like unlike
postRouter.put('/like',requireLogin,likePost)
postRouter.put('/unlike',requireLogin,unlikePost)
module.exports = router;








