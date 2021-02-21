// try {
//     interview((callback) => {
//         if (callback) {
//             console.log('cry');
//         } else {
//             console.log('happpy');
//         }
//     })
// } catch(err) {
//     console.log('err', err);
// }

// function interview(callback) {
//     setTimeout(() => {
//         if (Math.random() < 0.8) {
//             callback(null, 'success');
//         } else {
//             callback(new Error('fail'));
//         }
//     }, 3000);
// }

// 将上述setTimeout改造成promise处理异步回调


(function() {
    var promise = interview();
    promise.then((res) => {
        console.log('happy');
    }).catch((err) => {
        console.log('cry');
    })
    function interview () {
        return new Promise((resolve, reject) => {
            if (Math.random() < 0.8) {
                resolve('success');
            } else {
                reject(new Error());
            }
            
        })
    }
})()
