# hexo-service-worker

[![npm version](https://img.shields.io/npm/v/hexo-service-worker.svg?style=flat-square)](https://www.npmjs.com/package/hexo-servcie-worker)
[![Build Status](https://img.shields.io/travis/zoumiaojiang/hexo-service-worker.svg?style=flat-square)](https://travis-ci.org/zoumiaojiang/hexo-service-worker)

hexo-service-worker a [hexo](https://hexo.io) plugin for built one offline static website. and add some detail for cache contorl.

## Install

```bash
npm i hexo-service-worker --save
```

Once installed, run `hexo clean && hexo generate` to activate plugin.

## Usage

If the website serves all content from the origin server, you don't have to add any config. Simply install and run `hexo clean && hexo generate`.

add config to your `_config.yml` like this.

```yaml
# offline config passed to sw-precache.
service_worker:
  maximumFileSizeToCacheInBytes: 5242880
  staticFileGlobs:
  - public/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}
  stripPrefix: public
  verbose: true
```

if you have CDN resource

```yaml
- https://cdn.some.com/some/path/some-script.js
- http://cdn.some-else.org/some/path/deeply/some-style.css
```

Add this config to root `_config.yml`

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
