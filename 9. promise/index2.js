// 如果.then和.catch中返回一个新的Promise，那么这个外面的promise会会根据里面的这个promise返回的结果而结束

(function() {
    var promise = interview().then((res) => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve('accept');
            }, 300)
        })
    }).catch((err) => {
        console.log('err', err);
    })
    function interview () {
        return new Promise ((resolve, reject) => {
            if (Math.random() > 0.8) {
                resolve('success');
            } else {
                reject(new Error('fail'));
            }
        })
    }
    setTimeout(() => {
        console.log(promise);
    }, 500)
})()