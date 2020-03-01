const glob = require('glob');


// glob阻塞I/O的案例：
// let result = null;
// console.time('glob');
// result = glob.sync(__dirname + '/**/*');
// console.timeEnd('glob');
// console.log('result', result);


// glob非阻塞I/O的案例：
let otherResult = null;
console.time('glob');
glob(__dirname + '/**/*', function (err, res) {
    otherResult = res;
    console.log('got result');
    console.log(otherResult);
})
console.timeEnd('glob');
console.log(1 + 1);
