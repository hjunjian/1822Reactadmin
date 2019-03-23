import React, { Component ,Fragment} from 'react';
import {Modal,Card,Table,Button,Popconfirm,Pagination,Spin,message} from 'antd'
import AddGoods from './addGoods'
// import TableData from  './data'
import './goods.less'
// const columns=
class Goods extends Component {
  constructor(){
    super()
    this.state={
      dataSource:[],
      spinning:true,
      modalShow:false
    }
    // ctime: "2019-01-04T01:36:57.570Z",
    // imgPath: "/static/img/product-dryfruit@1.png",
    // name: "@name",
    // price: "@integer(1, 300)",
    // themeid: 1,
    // type: 1,
    // typeName: "面食",
    // unit: "份",
    // _id: "@integer(1, 300)"
    this.columns=[
      {
        title:'id',
        dataIndex:'_id',
        key:'_id' ,
        fixed:'left',
        width:80
     },
     {
        title:'名称',
        dataIndex:'name',
        key:'name' ,
        width:120
    },
    {
      title:'商品类型',
      dataIndex:'type',
      key:'type',
      width:120,
      render(text){
          let types=['热菜','凉菜','猛龙过江','辣椒炒月饼','火山飘雪']
         return <span>{types[text]}</span>
      } 
   },
    {
      title:'价格',
      dataIndex:'price',
      key:'price',
      width:80,
      render(text){
         return <span>${text}</span>
      }
    },
      {
          title:'图片',
          dataIndex:'imgPath',
          key:'imgPath',
          width:80,
          render:(data)=>{
            console.log(data,'render')
            return (<img width='50' src={`http://47.95.207.1:8080${data}`}/>)
          }
      },
  //     {
  //       title:'图片',
  //       dataIndex:'imgPath',
  //       key:'imgPath',
  //       width:80,
  //       render:(data)=>{
  //         console.log(data,'render')
  //         return (<img width='50' src={`http://47.95.207.1:8080${data}`}/>)
  //       }
  //   },
  //   {
  //     title:'图片',
  //     dataIndex:'imgPath',
  //     width:80,
  //     key:'imgPath',
  //     render:(data)=>{
  //       console.log(data,'render')
  //       return (<img width='50' src={`http://47.95.207.1:8080${data}`}/>)
  //     }
  // },
      {
        title:'操作',
        width:120,
        fixed:'right',
        dataIndex:'Action',
        key:'Action',  
        render:(tmp,data)=>{
         
            return(
                <div>
                    <Popconfirm 
                    title='确定要删除这条数据吗?' 
                    onConfirm={this.del.bind(this,data)}
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
  del(data){
    console.log(data)
    //假删除 不请求数据 直接操作本地数据
    // this.$axios.get('/delProduct')
    // .then((result)=>{
    //   if(result.err==0){
    //     let tmpdata=this.state.dataSource.filter((item)=>{
    //       if(item._id==data._id){
    //         return false
    //       }else{
    //         return true
    //       }
    //     })
        
    //     message.success('删除成功',1)
    //     this.setState({dataSource:tmpdata})
    //   }else{
    //     message.error('删除失败',1)
    //   }
    // })
    //先请求接口  如果成功 直接刷新数据
    this.$axios.get('/delProduct')
    .then((result)=>{
      if(result.err==0){
        
        message.success('删除成功',1)
        this.loadTableData()
      }else{
        message.error('删除失败',1)
      }
    })

  }
  changePage(page,pagesize){
    console.log(page,pagesize)
    this.loadTableData();
  }
  componentDidMount(){
    this.loadTableData();
  }
  loadTableData(){
    this.$axios.get('/getProduct')
    .then((data)=>{
      console.log(data)
      this.setState({dataSource:data.data,spinning:false})
    })
  }
  addProduct(){
    //添加商品 显示模态框
    this.setState({modalShow:true})
  }
  hideModal(type){
    //隐藏模态框
    if(type=='cacel'){
      this.setState({modalShow:false})
    }else{
      // let fun=this.refs.addGoods
      // this.refs.addGoods.handleSubmit()
      console.log(this)
    }
   
  }
  render() {
    let {dataSource,spinning,modalShow} = this.state
    return (
     <Card>
       <Button onClick={this.addProduct.bind(this)}>添加商品</Button>
       <Spin spinning={spinning}>
       <Table 
            dataSource={dataSource} 
            columns={this.columns} 
            scroll={{y:240,x:1000}}
            pagination={false}
            bordered
      />
       <Pagination simple  defaultCurrent={2} total={50} onChange={this.changePage.bind(this)}></Pagination>
        </Spin>
        <Modal visible={modalShow} title='增加商品' 
                 footer={null}
               onCancel={this.hideModal.bind(this,'cacel')}  
               onOk={this.hideModal.bind(this,'submit')}>
               <AddGoods ref='addGoods'></AddGoods>
               </Modal> 
     </Card>
    );
  }
}

export default Goods;
