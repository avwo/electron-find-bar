English | [中文](./README-zh_CN.md)

# find-bar
[![NPM version](https://img.shields.io/npm/v/find-bar.svg?style=flat-square)](https://npmjs.org/package/find-bar)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://www.npmjs.com/package/find-bar)

This npm package is used to add a find bar to Electron App, and it is very easy to use.

# Install
``` sh
npm i --save find-bar
```
# Usage
``` js
const { app } = require('electron'); 
const setFindBar = require('find-bar');

// add find bar to all windows
app.on('browser-window-created', (_, win) => {
  // do something...
  setFindBar(win);
});

```
Find bar is implemented through `BrowserWindow`, which is essentially a window object. You can use `win._isFindBar` to determine whether it is a find bar, and you can use `win._hasFindBar` to determine whether the current window is bound to a find bar，and the detailed usage of `setFindBar` is as follows.

# setFindBar(win[, options])
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

  # Example

<img width="1000" alt="Whistle Client" src="https://github.com/avwo/electron-find-bar/assets/11450939/ac5b0474-89e2-446b-ad5e-653e6d6a8c49">

GitHub: https://github.com/avwo/whistle-client

# License
[MIT](./LICENSE)
