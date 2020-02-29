console.log('start requirejs')
var lib = require('./lib.js'); // {}
console.log('end requirejs', lib);
// 一个lib.js文件被引用后，默认是空对象

lib.additional = 'test';
// 被引用的lib和lib.js文件中的引用是同一个引用

console.log('lib', lib, lib.add);

// 当子文件module.export之后，在外面挂载的additional并不会挂在exports上，而是会挂在module.exports上