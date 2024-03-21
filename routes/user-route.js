const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const users_controller = require('../controllers/users-controller');

app.set("view engine", "pug");
app.set("views","views");
app.use(bodyParser.urlencoded({extended:false}));

router.route('/login')
        .post(users_controller.login)
        .get((req, res)=>{
            res.status(200).render("login");
        })

router.route('/register')
        .post(users_controller.register)
        .get((req, res)=>{
            res.status(200).render("register");
        })

module.exports = router;








