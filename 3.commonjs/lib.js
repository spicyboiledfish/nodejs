console.log('hello world');

exports.hello = 'world';

exports.add = function (a, b) {
    return a + b;
}

exports.geekbang = {
    hello: 'world'
}

module.exports = function minis(a, b) {
    return a - b;
}

setTimeout(() => {
    console.log('exports', exports, module.exports, module.exports.additional);
}, 2000)

// 修改module.export会把exports上挂载的所有的属性和方法给覆盖掉