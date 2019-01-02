import React from 'react'
import './container.css'
import MyMenu from '../menu/menu'

import { Layout } from 'antd'

const { Header, Sider, Content } = Layout

export default class Container extends React.Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Layout className="container">
        <Header className="my-header">
            {
            	this.state.collapsed 
            	?
            	<i className="iconfont icon" onClick={this.toggle}>&#xe62b;</i>
            	:
            	<i className="iconfont icon" onClick={this.toggle}>&#xe62c;</i>
            }
        </Header>
        {/* 第一个Sider是充当背景以及动画，不填写内容， */}
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{marginTop: 64}}/>
        {/* 第二个Sider有动画，填写内容， */}
        <Sider className="my-sider" trigger={null} collapsible collapsed={this.state.collapsed} >
            <MyMenu></MyMenu>
        </Sider>
        <Content className="my-content">
            <div style={{height: 2000}}>Content</div>
        </Content>
      </Layout>
    );
  }
}