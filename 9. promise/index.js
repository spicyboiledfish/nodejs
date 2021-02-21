(function() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 500);
    })
    
    console.log(promise);
    
    setTimeout(() => {
        console.log(promise);
    }, 800);
})();


(function() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject(new Error());   // 错误会被抛到全局，被浏览器捕捉到报错，而不是catch住
        }, 500);
    })
    
    console.log(promise);
    
    setTimeout(() => {
        console.log(promise);
    }, 800);
})();

(function() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('3');
        }, 500);
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
    
    console.log(promise);
    
    setTimeout(() => {
        console.log(promise);
    }, 800);
})();


(function() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject(new Error('3'));
        }, 500);
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
    
    console.log(promise);
    
    setTimeout(() => {
        console.log(promise);
    }, 800);
})();


