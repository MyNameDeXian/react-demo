+ node下载地址 <https://nodejs.org/en/download/>
+ npm init 创建 package.json
+ 安装 react -> npm install react react-dom --save

### webpack 配置
```bash
# 安装 webpack 
npm install webpack webpack-dev-server --save-dev
npm install extract-text-webpack-plugin html-webpack-plugin open-browser-webpack-plugin --save-dev

# mac & linux 系统下的 package.json 里scripts 配置
"scripts": {
    "start": "NODE_ENV=dev webpack-dev-server --progress --colors",
    "mock": "node --harmony ./mock/server.js",
    "build": "rm -rf ./build && NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors"
},

# windows 系统下的 package.json 里scripts 配置
"scripts": {
  	"start": "set NODE_ENV=dev && webpack-dev-server --progress --colors",
  	"mock": "node --harmony ./mock/server.js",
  	"build": "rd/s/q build && set NODE_ENV=production && webpack --config ./webpack.production.config.js --progress --colors",
},
```

### 性能的优化
```bash
# 性能检测
npm i react-addons-perf --save

# 性能优化
npm i react-addons-pure-render-mixin --save
```
### 路由 和 redux 
```bash
# 路由
npm i react-router --save

# redux
npm i react-redux --save
npm i redux --save
npm i redux-thunk --save
```

### fetch
```bash
# 安装fetch
npm install whatwg-fetch --save

# 为了兼容低版本浏览器
npm install es6-promise --save
```

### mock数据模拟
```bash
# 安装 koa
npm install koa koa-body koa-router --save-dev
```