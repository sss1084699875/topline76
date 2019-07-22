module.exports = {
  lintOnSave: true,
  devServer: {// 实时保存、编译的配置段
    open: true, // 自动开启浏览器
    port: 3000, // 服务运行端口（小于65000的基本都可以，前提是其他进程没有使用）
    host: '127.0.0.1' // 运行服务的主机名(是电脑的真实ip，不能乱定义)
  }
}
