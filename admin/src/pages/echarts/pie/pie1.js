import React, { Component } from 'react';
import Echarts from 'echarts'
import ReactEcharts from 'echarts-for-react';
class component extends Component {
  constructor(){
    super()
    this.state={
        data:{
            series : [
                {
                    type: 'pie',
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                
                }
            ]
        }
    }
  }
  componentDidMount(){
    setInterval(()=>{
        this.$axios.get('/piedata')
        .then((res)=>{
            this.setState({data:res.data})
        })
    },1000)
  }

  render(){
      console.log('render')
      let {data}=this.state
      return(
          <div>
              {/* <button onClick={this.change.bind(this)}>  onclick</button> */}
              <h2>饼1</h2>
              <ReactEcharts option={data}></ReactEcharts>
          </div>
      )
  }
}


export default component;
