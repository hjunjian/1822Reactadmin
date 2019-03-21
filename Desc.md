### 基于antd react 管理平台

####  架构配置
axios
jsonp
react-route-dom
antd

##### less
  1.安装less  less-loader （2.7.3-3.0.0）之间
  2.配置 config/webpack.config.js 将sass 相关改成less
  3.less的公共文件
##### antd  蚂蚁金服

###### 全局引入  包体积过大
1. npm install antd
2. 引入组件
import {Button,Row} from 'antd'
3.引入css
import 'antd/dist/index.css'
######  局部引入
1.配置  
    a. babel-plugin-import
    b.329  babel-loader
    ```
                {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: paths.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                customize: require.resolve(
                 ...
                ),  
                plugins: [
                  [
                    ....
                  ],
                  ['import',{ "libraryName": "antd", style: true }]
                ],
                ....
              },
            },
    ```
    3. less 降级  2.7.3~3.0.0

2.import {Button,Row} from 'antd'

