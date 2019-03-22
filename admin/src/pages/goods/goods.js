import React, { Component ,Fragment} from 'react';
import {Card,Table,Button,Popconfirm,Pagination} from 'antd'
import TableData from  './data'
import './goods.less'
// const columns=
class Goods extends Component {
  constructor(){
    super()
    this.columns=[{
        title: '姓名1',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄2',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址1',
        dataIndex: 'address',
        key: 'address',
      },
      {
          title:'头像',
          dataIndex:'avator',
          key:'avator',
          render:(data)=>{
            console.log(data,'render')
            return (<img width='20' src={data}/>)
          }
      },
      {
        title:'操作',
        dataIndex:'Action',
        key:'Action',  
        render:(data)=>{
            return(
                <div>
                    <Popconfirm 
                    title='确定要删除这条数据吗?' 
                    onConfirm={this.del.bind(this)}
                    okText='确定'
                    cancelText='取消'
                    >
                        <Button size='small' type='danger' >删除</Button>
                    </Popconfirm>
                    <Button size='small'>修改</Button>
                </div>
            )
        }
      }
      
    ]//表头
  }
  del(){
    alert('删除')
  }
  changePage(page,pagesize){
    console.log(page,pagesize)
  }
  render() {
    return (
     <Card>
       <Table dataSource={TableData.dataSource} columns={this.columns} />
       <Pagination simple defaultCurrent={2} total={50} onChange={this.changePage.bind(this)}></Pagination>
     </Card>
    );
  }
}

export default Goods;
