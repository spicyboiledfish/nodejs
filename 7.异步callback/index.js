

interview(function(res) {
    if (res instanceof Error) {
        console.log('cry');
    } else {
        console.log('smile');
    }
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