const buffer1 = Buffer.from('geekbang');
const buffer2 = Buffer.from([1, 2, 3, 4]);
const buffer3 = Buffer.alloc(20);

console.log('buffer1', buffer1); // <Buffer 67 65 65 6b 62 61 6e 67>
console.log('buffer2', buffer2); // <Buffer 01 02 03 04>
console.log('buffer3', buffer3); // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

buffer2.writeInt8(12, 0);
console.log(buffer2);

// 针对字符串和数组，可以直接用Buffer.from()去创造一个Buffer对象
// Buffer对象和字符串直接转换：buff.toString()