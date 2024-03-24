const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const posts_controller = require('../../controllers/api/posts-controller');
app.use(bodyParser.urlencoded({extended:false}));

router.route('/api/post')
        .post(posts_controller.post)
        .get((req, res)=>{
            
        })

module.exports = router;








