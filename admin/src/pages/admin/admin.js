import React, { Component } from 'react';
import './admin.less'
import NavLeft from '../../components/NavLeft/navleft'
import {Row ,Col}  from 'antd'
import Contain from '../../components/Contain/Contain'
class Admin extends Component {
  render() {
    return (
      <div className="admin">
       <Row>
           <Col span={4}>
              <NavLeft></NavLeft>
           </Col>
           <Col span={20}>
              <Row>
                  <Col span={24} >
                    top
                  </Col>
              </Row>
              <Row>
                  <Col span={24} >
                  <Contain></Contain>
                  </Col>
              </Row>
              <Row>
                  <Col span={24} >
                    bottom
                  </Col>
              </Row>
           </Col>
       </Row>
      </div>
    );
  }
}

export default Admin;
