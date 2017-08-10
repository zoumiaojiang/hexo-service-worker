# hexo-service-worker

[![npm version](https://img.shields.io/npm/v/hexo-service-worker.svg?style=flat-square)](https://www.npmjs.com/package/hexo-servcie-worker)
[![Build Status](https://img.shields.io/travis/lavas-project/hexo-service-worker.svg?style=flat-square)](https://travis-ci.org/lavas-project/hexo-service-worker)

hexo-service-worker 是一个 [hexo](https://hexo.io) 用来让博客拥有 Service Worker 功能的插件，能够默认的把站点中 public 内的所有静态资源包括 html 文件缓存起来，达到离线可访问的效果

> 感谢 [hexo-offline](https://github.com/JLHwung/hexo-offline) 插件的实践，hexo-service-worker 参考了部分实现。hexo-service-worker 同样也是采用 sw-precache 方式来做缓存策略的，`_config.yml` 的配置项和 sw-precache 以及 hexo-offline 几乎保持一致。

## 安装

```bash
npm i hexo-service-worker --save
```

Once installed, run `hexo clean && hexo generate` to activate plugin.

## 用法

安装插件后，直接配置 `_config.yml` 文件如下就可以了：

```yaml
# offline config passed to sw-precache.
service_worker:
  maximumFileSizeToCacheInBytes: 5242880
  staticFileGlobs:
  - public/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}
  stripPrefix: public
  verbose: true
```

以上配置是缓存 public 文件夹下面的指定静态资源和静态 html 页面的。

如果除了自身博客项目的静态资源需要缓存以外，还有第三方 CDN 静态资源的缓存需求的话，例如：

```yaml
- https://cdn.some.com/some/path/some-script.js
- http://cdn.some-else.org/some/path/deeply/some-style.css
```

这种需求也可以通过配置 `_config.yml` 完成，在 `servcie_worker` 的配置后面补全下面格式的配置即可：

```yaml
service_worker:
  runtimeCaching:
    - urlPattern: /*
      handler: cacheFirst
      options:
        origin: cdn.some.com
    - urlPattern: /*
      handler: cacheFirst
      options:
        origin: cdn.some-else.org
```

enjoy it!
