// 引入path模块，后面要使用其中的方法
const path = require('path')

// webpack配置文件需要导出
module.exports = {
  // 设置js入口文件，默认为src下面的index.js文件
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'output') // __dirname是node环境下自带的的全局变量
  }
}
