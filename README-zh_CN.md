[English](./README.md)  | 中文

# find-bar
[![NPM version](https://img.shields.io/npm/v/find-bar.svg?style=flat-square)](https://npmjs.org/package/find-bar)
[![License](https://img.shields.io/aur/license/find-bar?style=flat-square)](https://www.npmjs.com/package/find-bar)

该 npm 包用来给 Electron 应用添加搜索框，且使用方法很简单。

# 安装
``` sh
npm i --save find-bar
```
# 用法
``` js
const { app } = require('electron'); 
const setFindBar = require('find-bar');

// 给应用里面的所有窗口添加搜索框
app.on('browser-window-created', (_, win) => {
  // 可以通过代码按需设置
  setFindBar(win);
});

```
搜索框是通过 `BrowserWindow` 实现的，本质上它也是一个普通的 Window 对象，可以通过 `win._isFindBar` 判断对象是否为自定义搜索框，也可以通过 `win._hasFindBar` 判断窗口是否已挂载搜索框，`setFindBar` 的详细用法如下。

# setFindBar
  ``` js
  export interface FindBarOptions {
    left?: number;
    right?: number; // 80 by default
    top?: number; // (mac: 20, win: 30) by default
    bottom?: number;
    darkMode?: boolean; // true by default
  }

  export default function(win: any, options?: FindBarOptions): void;
  ```

  # 示例

<img width="1000" alt="Whistle Client" src="https://github.com/avwo/electron-find-bar/assets/11450939/ac5b0474-89e2-446b-ad5e-653e6d6a8c49">

代码仓库: https://github.com/avwo/whistle-client

# License
[MIT](./LICENSE)
