var playerAction = process.argv[process.argv.length - 1]; // 用户输入的最后一段命令行

const game = require('./lib');

let count = 0;

process.stdin.on('data', e => {
    const playerAction = e.toString().trim();  // 监听进程中用户输入
    console.log(playerAction);
    const result = game(playerAction);
    console.log(result);
    if (result === 1) {
        count++;
    }
    if (count === 3) {
        console.log('你太厉害了，我不玩了==');
        process.exit(); // 退出进程
    }
})