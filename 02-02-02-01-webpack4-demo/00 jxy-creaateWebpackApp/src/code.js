// 导出模块
export default () => {
  const h1 = document.createElement('h1')
  h1.innerText = '123'
  h1.onclick = function () {
    console.log('123')
  }
  return h1
}
