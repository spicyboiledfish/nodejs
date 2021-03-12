const React = require('react');

const http = require('http');

const {
  renderToString
} = require('react-dom/server');

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, "Hello World!!!");
  }

}

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  const html = renderToString( /*#__PURE__*/React.createElement(HelloWorld, null));
  res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>传统的SSR</title>
        </head>
        <body>
            <div id="root">
                ${html}
            </div>
        </body>
        </html>
    `);
}).listen(9001);
