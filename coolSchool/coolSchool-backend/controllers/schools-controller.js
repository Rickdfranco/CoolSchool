const schoolData  = require('../data/users');

const helper = (name, searching, schoolData) => {
    let item = schoolData.filter(p => p['name'] == name).map(p => p[searching]).pop();
    let obj = { ['name']: name, [searching]: item }
    return obj;
}
const index = (req, res) => {
    res.json({ data: schoolData });
}

const rank = (req, res) => {
    let { rank } = req.query;
    console.log(req.query)
    let schoolRank = schoolData.filter(s => s.rank == rank ).pop();
    // let schoolList = schoolData.map(s => s.schoolList)
    console.log(schoolRank)
    if (schoolRank === undefined) {
        res.send({ message:'cannot find' })
    } else ( res.send({ schoolRank }))
}




module.exports = { index, rank }