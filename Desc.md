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
2.线上搭建好的  easymock  https://www.easy-mock.com/login 根据mock js 搭建
3.http://mockjs.com

#### 骨架屏

#### 数据请求
axios 
jsonp 
跨域  config/ webpack.devserver.config.js  proxy

#### socket （长连接 短连接）的使用场景

socket 使用场景 
1.服务器向前端推送消息
  站内信 消息通知 
2.实时刷新  蜡烛图 股票...

实现方式
1.socket 服务器
2.前端通过某些连接方式进行连接

服务器 
有客户端连接
接受客户端发送消息
主动向客户端发送消息
客户端断开连接
客户端：
连接到服务器端
接受服务器发送消息
服务端断开连接
主动向服务端发送消息

websocket  h5新增
socket.io
node  net 模块

socket 连接
1.创建scoket 服务器 等客户端连接
2.客户端创建连接对象 连接socket 服务器
    每当有一个客户端连接就会创建一个client 连接对象
    将所有的连接对象保存 便于推送消息
3.客户端发送消息  服务器端接受并处理
4.服务器主动发送消息  客户端接受处理

