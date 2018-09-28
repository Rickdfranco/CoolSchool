const schoolData  = require('../data/users');

const helper = (name, searching, schoolData) => {
    let item = schoolData.filter(p => p['name'] == name).map(p => p[searching]).pop();
    let obj = { ['name']: name, [searching]: item }
    return obj;
}
const index = (req, res) => {
    res.json({ data: schoolData });
}

const getId = (req, res) => {
    let { id } = req.query;
    console.log(req.query)
    schoolData.find( {  })
    .exec((err, users) => {
    if (err) {
        res.send({ message: "There is no user by that id" })
    } else {
        res.send({ users })
    }
});
}




module.exports = { index, getId }