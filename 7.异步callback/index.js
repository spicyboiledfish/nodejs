
// 1. try catch不住的原因在此：
// try {
//     interview(() => {
//         console.log('happpy');
//     })
// } catch(err) {
//     console.log('err', err);
// }

// function interview(callback) {
//     setTimeout(() => {
//         if (Math.random() < 0.2) {
//             callback(null, 'success');
//         } else {
//             throw new Error('fail')
//         }
//     }, 3000);
// }

//2. 更改去回调队列中捕获报错，是可以捕获到的
// interview();
// function interview(callback) {
//     setTimeout(() => {
//         try{
//             test()
//         } catch(err) {
//             console.log('err', err);
//         }
//     }, 3000);
// }

// function test () {
//     if (Math.random() < 0.2) {
//         callback(null, 'success');
//     } else {
//         throw new Error('fail')
//     }
// }


//3. 回调函数的规范，都是第一个参数是error, 第二个参数才是结果，传callback就好。
try {
    interview((callback) => {
        if (callback) {
            console.log('cry');
        } else {
            console.log('happpy');
        }
    })
} catch(err) {
    console.log('err', err);
}

function interview(callback) {
    setTimeout(() => {
        if (Math.random() < 0.8) {
            callback(null, 'success');
        } else {
            callback(new Error('fail'));
        }
    }, 3000);
}