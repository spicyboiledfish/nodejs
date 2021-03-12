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
  - 