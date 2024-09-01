var _ = require("lodash")

let arr = ["a","b","c","d","e","f"]

let twopart = _.chunk(arr,2)
console.log(twopart)