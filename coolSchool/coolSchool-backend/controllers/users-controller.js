const User  = require('./../models/users');

const index = (req, res) => {
    User.find()
    //users is just a parameter that mongoose pushes data into
        .exec((err, users) => {
            if (err) { res.send({success: false, error: err.message});}
            else if (users.length === 0) {
                res.send({ success: false, message: " there were no users found"})
            } else {
                res.send({success: true, users});
            }
        })
    
}

const getId = (req, res) => {
    let { id } = req.params
    User.findById(id)
    .exec((err, users) => {
    if (err) {
        res.send({ message: "There is no user by that id" })
    } else {
        res.send({ users })
    }
});
}

const signup = (req, res) => {
    let user = req.body;
    console.log(user);
    if (user != undefined) {
        User.create(user)
            .then(user => res.send(user))
            .catch(err => res.send({ error: err.message }))
    } else {
        res.send({ message: 'signup route'});
    }
    
}

const updateUser = (req, res) => {
    let { id } = req.params;
    User.findByIdAndUpdate(id, {$set: req.body}, {new: true}, (err, user) => {
        if (err) {
            res.status(500).send({ message: `There was a error with our database. `, error: err.message })
           } else if (!user) {
            res.status(404).send({ message: "There is no user by that id" })
        } else {
            res.status(200).send(user);
        }
    });
}

const deleteUser = (req, res) => {
    let { id } = req.params;
    User.findByIdAndRemove(id, (err, user) => {
        if (err) {
            res.send({ error: err.message })
        } else if (!user) {
            res.send({ message: "There is no user by that id." })
        } else {
            res.send({ user })
        }
    })
}


module.exports = { index, getId, signup, updateUser, deleteUser }