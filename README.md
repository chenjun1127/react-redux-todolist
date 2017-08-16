## React-redux todoList
![首页](/screenshot.png)
### 如何执行
####  1、将项目克隆到本地，cd到react-redux-todolist
```javascript
git clone git@github.com:chenjun1127/react-redux-todolist.git
cd react-redux-todolist
```
#### 2、安装依赖
```javascript
npm install
或
yarn install
```
#### 3、执行
```javascript
npm run dev
// npm run build(打包)
```
#### 4、打开浏览器浏览 http://localhost:3000/

Tips：在安装node-sass的时候，有可能不成功，如不成功，请先删除 node_modules ，然后将镜像源换成taobao的，再执行npm install 或 yarn install；
* 删除 node_modules
```javascript
rd/s/q node_modules
```
* 切换淘宝镜像源
```bash
npm:
npm config set registry http://registry.npm.taobao.org
yarn:
yarn config set registry http://registry.npm.taobao.org
```
* 再安装依赖
```bash
npm install
yarn 或 yarn install
```