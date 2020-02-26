console.log('hello world!')

console.log(Date);
console.log(Math);

console.log(setTimeout);
console.log(setInterval);
console.log(setImmediate);

// 浏览器渲染的下一帧：由于不处在浏览器环境中，会报错ReferenceError: requestAnimationFrame is not defined
// console.log(requestAnimationFrame);

console.log(__filename); // 当前文件的目录
console.log(__dirname);  // 当前文件所在的文件夹的目录

console.log(process);