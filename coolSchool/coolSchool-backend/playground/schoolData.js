const data = require('./../data/users');

// look up a school by rank
// rank value is within data / school list / rank history / rank

let schoolList = data.map(s => s.schoolList)
// let rankHist = schoolList.map(sc => sc.rankHistory)
// console.log(schoolList);
// console.log(rankHist);


for ( let i = 0; i < schoolList.length; i++) {
    // console.log(schoolList[i].rankHistory)
}

console.log(schoolList[1].rankHistory)