#### 学习期间的问题
1. 什么是客户端渲染和服务端渲染？两者的优劣在哪里？
2. 服务端是怎么编写组件和渲染组件？虚拟DOM怎么处理？ `renderToString`
3. 同构是什么？为什么要采用同构？同构解决什么问题？ `服务端代码不支持事件`
4. 客户端路由和服务端路由怎么结合起来？多页面路由和多层级路由怎么处理？ `renderRoutes`
5. SSR怎么和状态管理结合起来？脱水和注水是什么？`window.context`
6. 服务端和客户端怎么结合起来获取接口数据？
7. SSR使用层级上如何做好较好的架构设计？什么样的架构比较便捷？ `node 作为中间件`
8. 404和301等请求状态下的ui怎么处理？`StaticRouter context`
9. SSR的CSS怎么处理？`isomorphic-style-loader`
10. SEO是什么？SEO能够给我们带来什么好处？
11. SSR的使用场景是什么？如果不使用SSR怎么解决SEO的问题？
12. 预渲染是什么？原理是什么？比较好的架构设计是什么样的？ `借助无头浏览器将渲染csr渲染完的代码进行返回给网络蜘蛛`