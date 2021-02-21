// console.log(async function() {
//     return 4
// }())

// console.log(function() {
//     return new Promise ((resolve) => {
//         resolve(4)
//     }) 
// }())


console.log(async function() {
    throw new Error(4)
}())

console.log(function() {
    return new Promise ((resolve, reject) => {
        reject(new Error(4))
    }) 
}())