// xss过滤：

const user = {
    name: '<script />'
}
const vm = require('vm');

const text = vm.runInNewContext('`<h2>${_(user.name)}</h2>`', { 
    user,
    _: function (markup) {
        if (!markup) return '';
        return String(markup)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;')
    }
});

console.log('text', text);