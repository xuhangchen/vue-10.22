module.exports = {
    runtimeCompiler: true,
    // 打包路径
    outputDir: 'dist',
    devServer: {
        open: process.platform === 'darwin',
        // 主机地址
        host: '127.0.0.1',
        // 端口号
        port: 3001,
        https: false,
        hotOnly: false,
        // 跨域代理配置
        proxy: null,
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    },
};
