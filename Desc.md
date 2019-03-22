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


####react 插槽 
组件标签内部的内容不解析
可以在组件内部通过this.props.chidern 获取


####  注册登录
token  jwt   jsonwebtoken
api 无状态
登录-》 接受后端数据 token -》本地 （cookie localstoreage）-》调用其他接口 将token作为参数进行传递
邮箱注册
1.验证邮箱正则 前
2.是否存在   后
3.验证邮箱正确性  调用后端的api接口 （成功或者失败）  向邮箱发送验证码  nodemail
4，填写验证码 密码 提交
5. 验证邮箱和验证码 是否匹配  ok 注册逻辑 不注册


#### mock数据 
1.自己本地搭建mock 服务器
2.线上搭建好的  easymock  https://www.easy-mock.com/login
