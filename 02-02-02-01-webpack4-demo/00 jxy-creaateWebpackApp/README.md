### 体验webpack的最基础的打包能力


创建三个文件，使用ES Moudle模式，这里可以使用serve运行一下看效果
<body>
  <!-- 引入js文件，设置为mudule模式 -->
  <script type="module" src="./src/index.js"></script>
</body>
```js
// index.js

// 引入模块
import h1 from './code.js'
// 使用模块
const h = h1()
document.body.append(h)

```

```js
// code.js

// 导出模块
export default () => {
  const h1 = document.createElement('h1')
  h1.innerText = '123'
  h1.onclick = function () {
    console.log('123')
  }
  return h1
}
```


1. 利用yarn创建新项目：`yarn init --yes`
2. 利用yarn安装两个依赖：`yarn add webpack webpack-cli --dev`
3. 利用yarn查看一下安装的版本：`yarn webpack --version`
4. 利用yarn执行webpack打包：`yarn webpack`
5. 会默认打包到dist目录下，更改htmnl的drc属性即可，同时可以删掉`type="module"`，因为webpack已经把文件转换为ES5
6. 添加自动化脚本：`"build": "webpack"`