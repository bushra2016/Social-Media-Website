const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const posts_controller = require('../../controllers/api/posts-controller');
app.use(bodyParser.urlencoded({extended:false}));

router.route('/api/post')
        .get(posts_controller.get_all_posts)
        .post(posts_controller.send_post)

router.route('/api/post/:postId')
        .get(posts_controller.get_one_post);

module.exports = router;








