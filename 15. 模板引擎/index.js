const user = {
    name: '王小二'
}
const result = `<h2>${user.name}</h2>`
const vm = require('vm');

const text = vm.runInNewContext('`<h2>${user.name}</h2>`', { user });

console.log('text', text);