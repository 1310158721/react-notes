import React from 'react'
import './container.css'
import MyMenu from '../myMenu/myMenu'
import Router from '../../router/router'

import {
  Layout
} from 'antd';

const {
  Header, Content
} = Layout

export default class Container extends React.Component {
  constructor (props) {
  	super(props)
  	this.state = {
      collapsed: false
    }
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }
  headerClick (e) {
  	this.setState({
  		collapsed: !this.state.collapsed
  	})
  }
  render() {
    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: 'gray' }}>
            <Header style={{position: 'fixed', width: '100%', zIndex: 1, color: '#fff' }} >
              <div style={{width: 30, height: 30, lineHeight: '30px', backgroundColor: 'blue'}} onClick={(e) => {this.headerClick(e)}}>
                
              </div>
            </Header>
            <Layout style={{position: 'relative', top: '64px'}}>
                {/* 为了在点击menu item时能获取到当前的路由信息，所以用 BrowserRouter包裹 */}
                <MyMenu collapsed={this.state.collapsed}></MyMenu>
                <Content style={{backgroundColor: 'rgba(0,0,0,.3)', color: '#fff'}}>
                    <Router></Router>
                </Content>
            </Layout>
        </Layout>
    )
  }
}