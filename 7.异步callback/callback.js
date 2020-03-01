// 回调地狱
interview(function(err) {
    if (err instanceof Error) {
        return console.log('cry in 1st round');
    }
    interview(function(err) {
        if (err instanceof Error) {
            return console.log('cry in 2nd round');
        }
        interview(function(err) {
            if (err instanceof Error) {
                return console.log('cry in 2st round');
            }
        })
    })
})

function interview(callback) {
    setTimeout(() => {
        if (Math.random() < 0.2) {
            callback(null, 'success');
        } else {
            callback(new Error('fail'))
        }
    }, 3000);
}