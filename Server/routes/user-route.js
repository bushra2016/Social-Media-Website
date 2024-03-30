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
        /*.get((req, res)=>{
            res.status(200).render("login");
        })*/

router.route('/register')
        .post(users_controller.register)
        .get((req, res)=>{
            res.status(200).render("register");
        })

router.route('/logout')
        .get(users_controller.logout);

module.exports = router;








