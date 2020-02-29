module.exports = function (playerAction) {
    var random = Math.random() * 3;

    if (random < 1) {
        var computerAction = 'rock'; // 石头
    } else if (random > 2) {
        var computerAction = 'scissor'; // 剪刀
    } else {
        var computerAction = 'paper'; // 布
    }
    
    if (playerAction == computerAction) {
        console.log('平局');
        return 0;
    } else if(
        (computerAction === 'rock' && playerAction === 'paper') || 
        (computerAction === 'scissor' && playerAction === 'rock') || 
        (computerAction === 'paper' && playerAction === 'scissor') 
    ) {
        console.log('玩家赢');
        return 1;
    } else {
        console.log('玩家输');
        return -1;
    }
}

