(function () {
    const result = async function() {
        var content = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 300)
        })
        console.log(content);
        return 4;
    }()

    setTimeout(() => {
        console.log(result);
    }, 800)
    
})()

(function () {
    const result = async function() {
        var content = await new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(6);
            }, 300)
        })
        console.log(content);
        return 4;
    }()

    setTimeout(() => {
        console.log(result);
    }, 800)
    
})()


(function () {
    const result = async function() {
        try {
            var content = await new Promise ((resolve, reject) => {
                setTimeout(() => {
                    reject(new Error('8'));
                }, 300)
            })
        } catch(e) {
            console.log('err', e.message);
        }
        
        console.log(content);
        return 4;
    }()

    setTimeout(() => {
        console.log(result);
    }, 800)
    
})()

