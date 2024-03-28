const bcrypt = require('bcryptjs');
const User = require('../models/user-model');

const login = (async (req, res, next) => {
    var payload = req.body;
    console.log(payload);
    if (req.body.logUsername && req.body.logPassword) {
        var usernameOrEmail = await User.findOne({
            $or: [
                { username: req.body.logUsername },
                { email: req.body.logUsername }
            ]
        })

        if (usernameOrEmail != null) {
            var result = await bcrypt.compare(req.body.logPassword, usernameOrEmail.password);
            if (result === true) {
                req.session.username = usernameOrEmail;
                req.session.activeUsers = req.session.activeUsers || [];
                req.session.activeUsers.push(usernameOrEmail);
                //return res.status(200).json({ message: 'Login successful', user: user });
                return res.status(200).json('Login successful');
            }
        }

        payload.errorMessage = "Login credentials incorrect.";
        // return res.status(401).json({ error: 'Login credentials incorrect' });
        return res.status(401).json('error');
    }

    payload.errorMessage = "Make sure each field has a valid value.";
    //res.status(400).json({ error: 'Make sure each field has a valid value' });
    res.status(400).json('error');
});


/*
const login = async (req, res, next) => {
   var payload = req.body;
   if (req.body.logUsername && req.body.logPassword) {
       try {
           var user = await User.findOne({
               $or: [
                   { username: req.body.logUsername },
                   { email: req.body.logUsername }
               ]
           });
           if (user != null) {
               var result = await bcrypt.compare(req.body.logPassword, user.password);
               if (result === true) {
                   req.session.user = user;
                   return res.status(200).json('Login successful');
               }
           }
           return res.status(401).json('Login credentials incorrect');
       } catch (error) {
           console.log(error);
           return res.status(500).json('Something went wrong');
       }
   }
   return res.status(400).json('Make sure each field has a valid value');
};
*/

const register = (async (req, res, next) => {
    console.log(req.body);
    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var username = req.body.username.trim();
    var email = req.body.email.trim();
    var password = req.body.password;

    var payload = req.body;

    if (firstName && lastName && username && email && password) {
        var user = await User.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        })
        /*.catch((error) => {
           console.log(error);
           payload.errorMessage ="Something went wrong.";
           res.status(200).render("register",payload);
  
        });*/
        if (user == null) {
            //user not found
            var data = req.body;
            data.password = await bcrypt.hash(password, 10);

            User.create(data)
                .then((user) => {
                    //req.session.user = user;
                    return res.status(200).json('Register successful');
                });
        }
        else {
            //user found
            if (email == user.email) {
                payload.errorMessage = "email already in use";
            }
            else {
                payload.errorMessage = "Username already in use";
            }
            //res.status(200).render("register",payload);
            res.status(200).json(payload.errorMessage);
        }
    }
    else {
        payload.errorMessage = "make sure each field has a valid value.";
        //res.status(200).render("register",payload);
        res.status(200).json(payload);
    }
});


const logout = (async (req, res, next) => {
    console.log("req session: ", req.body)
    req.session.activeUsers = req.session.activeUsers || [];
    const index = req.session.activeUsers.indexOf(req.session.username);
    if (index !== -1) {
        req.session.activeUsers.splice(index, 1);
    }
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.redirect('/login');
    });
});

//follow unfollow
exports.followUser = async (req, res) => {
    await User.findByIdAndUpdate(req.body.followId, {
        $push: { followers: req.user._id }
    }, { new: true },
        (err, result) => {
            if (!result) {
                return res.status(400).json({ msg: 'This user dose not exists' })

            }
            User.findByIdAndUpdate(req.user._id, {
                $push: { following: req.body.followId }
            }, { new: true })
                .select("-password")
                .then(result => {
                    res.json(result)
                })
                .catch(err => {
                    return res.status(500).json({ msg: err.message })
                })
        }
    )
}

exports.unfollowUser = async (req, res) => {
    await User.findByIdAndUpdate(req.body.unfollowId, {
        $pull: { followers: req.user._id }
    }, { new: true },
        (err, result) => {
            if (!result) {
                return res.status(400).json({ msg: 'This user dose not exists' })

            }
            User.findByIdAndUpdate(req.user._id, {
                $pull: { following: req.body.unfollowId }
            }, { new: true })
                .select("-password")
                .then(result => {
                    res.json(result)
                })
                .catch(err => {
                    return res.status(500).json({ msg: err.message })
                })
        }
    )
}


exports.searchUser = (req, res) => {

    let userPattern = new RegExp("^" + req.body.query)

    User.find({name:{$regex:userPattern}})
    .select("_id name email pic")
    .then(user =>{
        res.json({user})
    })
    .catch(err=>{
        return res.status(500).json({msg:err.message})
    })
}



module.exports = {
    register,
    login,
    logout
};