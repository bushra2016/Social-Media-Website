const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const bodyParser = require("body-parser");
const users_controller = require('../controllers/users-controller');

app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

router.route('/login')
        .post(users_controller.login)
        .get(cors())

router.route('/register')
        .post(users_controller.register)
        .get((req, res)=>{
            res.status(200).render("register");
        })

router.route('/logout')
        .get(users_controller.logout);
 
router.route('/api/users/:userId')
        .get(users_controller.get_profile)
        .put(users_controller.edit_profile)
        .delete(users_controller.delete_profile)
        
router.route('/api/users/:userId/follow')
        .post(users_controller.follow)

router.route('/api/users/:userId/unfollow')
        .delete(users_controller.unfollow)
 
router.route('/api/users/:userId/following')
        .get(users_controller.get_following)

router.route('/api/users/:userId/followers')
        .get(users_controller.get_followers)

module.exports = router;








