### React SSR

- SSR: Server Side Rendering 服务端渲染

- 优缺点：

  - 优点： 直出html页面会搜索引擎非常友好，首屏加载速度很快，爬虫很方便找到内容，有利于SEO
  - 缺点： 所有页面的加载需要向服务器请求完整的页面内容和资源，访问量较大的情况下对服务器有压力，页面之间的频繁刷新跳转体验不好

  

  CSR: 客户端渲染。web端主流的渲染模式，开发模式是SPA, 单页面应用.

  React SSR => SSR +SPA. 每次刷新页面的时候数据是从服务端直出，然后后续的访问就是 `spa` 的体验，即能解决`SEO`问题，也能保持页面切换的效率，服务器的压力要比传统的`ssr`也相对小

- API:

  - import ReactDOMServer from 'react-dom/server'; `ReactDOMServer` 类可以帮我们在服务端渲染组件 - 得到组件的 `html` 字符串
    - ReactDOMServer.renderToString(element) 把一个react组件渲染成为原始的HTML
  - ReactDOM.hydrate() 客户端渲染。
  - react16以后采用了renderToNodeStream。相比renderToString性能要好很多
    - 因为组件渲染为字符串，是一次性处理完后才开始向浏览器端返回结果。而采用流的话，可以边读边输出，可以要让页面更快的展现，缩短首屏展现时间

- 简单的html直出页面：

  - 实现方案：renderToString(<HelloWorld />)得到一个静态的html字符串。创建一个node服务，然后再有服务端res.end输出。但是如果增加交互的话，点击事件无法生效。
  - 原因：元素的事件都是基于浏览器执行的，只有在浏览器端执行了相应的js代码才能绑定事件。而我们之前写的只是一个静态页面。我们需要让代码在浏览器端也执行一次。组件在浏览器端挂载后react会自动完成事件绑定。
  - 浏览器也执行一次代码，组件会不会重复渲染？浏览器接管页面后，react-dom在渲染组件前会先和页面中的节点做对比，只有对比失败的情况下才会采用客户端的内容进行渲染，而且react也会尽可能多的复用已有的节点。

- 同构：以上我们说了服务端和客户端都要执行同一份代码，服务端直出组件后，浏览器接管页面，然后剩下的工作都交由浏览器来完成。这样的一套机制就是同构。
    - 双端对比的时候，浏览器端代码执行时生成的节点结构会和网页内已有的结构进行对比， 如果对比失败，就会采用客户端的结构。如果你在服务端渲染的代码html随便加入客户端不存在的一个div代码，那么会闪一下消失。 
    - 服务端渲染的组件和客户端渲染的组件的区别：服务端只是生成-html字符串，只会执行组件的componentWillMount方法。
    - 注意会报错：Did not expect server HTML to contain the text node " " in . 这是双端对比的时候有空格，在写中间件的时候，注意不要留空格。
    ```html
    <div id="root">
        ${html}
    </div>

    // 改成下面这样
    <div id="root">${html}</div>
    ```
    