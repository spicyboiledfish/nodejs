const webpack = require('webpack');
const config = require('../webpack.server.config');
const constantCode = require('./constant');

config.mode  = "development";

const compiler = webpack(config);

const watching = compiler.watch({
    aggregateTimeout: 300, //类似于节流功能，聚合多个更改一起构建
    ignored: /node_modules/,
    poll: 2000, //轮询的方式检查变更，单位是毫秒
    'info-verbosity': 'verbose', //在增量构建的开始和结束时，向控制台发送消息
}, (err, stats) => {
    let json = stats.toJson('minimal');
    if (json.errors) {
        json.errors.forEach(item => {
            console.log(item);
        })
    }
    if (json.warnings) {
        json.warnings.forEach(item => {
            console.log(item);
        })
    }
    //编译完成后 通知主进程来重启node 服务
    console.log(constantCode.SVRCODECOMPLETED);
});

compiler.hooks.done.tap('done', function(data) {
    console.log('\n server code done')
})

process.stdin.on('data', function(data) {
    if (data.toString() === 'exit') {
        process.exit();
    }
})