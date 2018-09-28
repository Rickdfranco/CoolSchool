const schoolData  = require('../data/users');


const index = (req, res) => {
    res.json({ data: schoolData });
}

const rank = (req, res) => {
    let { rank } = req.query;
    console.log(req.query)
    let schoolRank = schoolData.filter(s => s.rank == rank );
    // let schoolList = schoolData.map(s => s.schoolList)
    console.log(schoolRank)
    if (schoolRank === undefined) {
        res.send({ message:'cannot find' })
    } else ( res.send({ schoolRank }))
}





module.exports = { index, rank }