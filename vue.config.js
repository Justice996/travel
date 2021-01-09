const path = require('path');//引入path模块
function resolve(dir) {
  return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}


module.exports = {
  //配置目录
  chainWebpack: (config) => {
    config.resolve.alias
      .set('styles', resolve('./src/assets/styles'))
    //set第一个参数：设置的别名，第二个参数：设置的路径

  }
}