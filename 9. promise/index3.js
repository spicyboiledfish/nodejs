// 几轮面试下来，成功或者失败的第几轮的demo

(function() {
    var promise = interview(1)
        .then(() => {
            return interview(2)  // 这里的return很重要
        })
        .then(() => {
            return interview(3)
        })
        .then((res) => {
            console.log('smile')
        })
        .catch((err) => {
            console.log('cry ' + err.round + ' round');
        })
    function interview (round) {
        return new Promise((resolve, reject) => {
            if (Math.random() > 0.2) {
                resolve('success')
            } else {
                var error = new Error('fail');
                error.round = round;
                reject(error);
            }
        })
    }
})();

// 用async 和await去改写上面的代码：
(function() {
    (async function () {
        try {
            await interview(1);
            await interview(2);
            await interview(3);
        } catch(e) {
            return console.log('cry at ' + e.round);
        }
        console.log('smile');
    })()
    // 并行的话如下：
    // (async function () {
    //     try {
    //         await Promise.all([interview(1), interview(2)])
    //     } catch(e) {
    //         return console.log('cry at ' + e.round);
    //     }
    //     console.log('smile');
    // })()
    function interview (round) {
        return new Promise((resolve, reject) => {
            if (Math.random() > 0.2) {
                resolve('success')
            } else {
                var error = new Error('fail');
                error.round = round;
                reject(error);
            }
        })
    }
})();


// 多个面试并行如何呢？
(function() {
    Promise.all([
        interview('geekbang'),
        interview('tencent')
    ])
    .then(() => {
        console.log('smile')
    })
    .catch((err) => {
        console.log('cry for ' + err.name)
    })
    function interview (name) {
        return new Promise((resolve, reject) => {
            if (Math.random() > 0.2) {
                resolve('success')
            } else {
                var error = new Error('fail');
                error.name = name;
                reject(error);
            }
        })
    }
})();