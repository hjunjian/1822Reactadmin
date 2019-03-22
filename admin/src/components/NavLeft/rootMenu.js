export default{
    'menuData':[
    {
       name:'首页',
       path:'/admin/home',
       id:'0'
    },
    {
        name:'设置',
        path:'/admin/setting',
        id:'1'
    },
    {
        name:'用户管理',
        path:'/admin/user',
        id:'2',
        children:[
            {
                name:'用户添加',
                path:'/admin/user/add',
                id:'20'

            },
            {
                name:'管理员管理',
                path:'/admin/user/root',
                id:'21'
            }
        ]

    },
    {
        name:'图标展示',
        path:'echart',
        children:[
            {
                name:'饼状图',
                path:'/echart/bin',
                children:[
                    {
                        name:'饼1',
                        path:'/echart/bin/1'
                
                    },
                    {
                        name:'饼2',
                        path:'/echart/bin/2'
                
                    }
                ]
            },
            {
                name:'折线图',
                path:'/echart/line',
                children:[
                    {
                        name:'折线1',
                        path:'/echart/line/1'
                
                    },
                    {
                        name:'折线2',
                        path:'/echart/line/2'
                
                    }
                ]
            }
        ]
    },
    {
        name:'商品管理',
        path:'/admin/goods',
        id:'4'
    },

  ]

}