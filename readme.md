#### 突发奇想，将vue的设计模式用于服务端node的egg框架，写了egg-vue的npm包之后有想到了vue-router，于是也试着实现了下

#### 本插件基于egg^2.2.1,在egg基础目录的/app/controller/*.js中如下引用。
```js
'use strict';

const Router = require('egg-vue-router');
// 路由处理
module.exports = app => {
  const {
    router,
    controller,
  } = app;

  new Router({
    routes: [{
      path: '/', // 获取请求
      component: controller.home.handle,
    }],
  }, router);
};
````
#### methods等方法也可以继续升级进行配置。

### 这样的方式可以让vue的前端小伙伴更轻松的服务端开发，目前版本就是有了想法试了下，欢迎志同道合的朋友一起讨论优化。