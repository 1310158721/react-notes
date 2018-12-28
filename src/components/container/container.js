import React from 'react'
import './container.css'
import MyMenu from '../myMenu/myMenu'
import Router from '../../router/router'
import { BrowserRouter, Switch } from 'react-router-dom'

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
  headerClick () {
  	this.setState({
  		collapsed: !this.state.collapsed
  	})
  }
  render() {
    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: 'gray' }}>
            <Header style={{position: 'fixed', width: '100%', zIndex: 1, color: '#fff' }} onClick={this.headerClick.bind(this)}>123</Header>
            <Layout style={{marginTop: 64}}>
                {/* 为了在点击menu item时能获取到当前的路由信息，所以用 BrowserRouter包裹 */}
                <BrowserRouter>
                    <Switch>
                        <MyMenu collapsed={this.state.collapsed}></MyMenu>
                    </Switch>
                </BrowserRouter>
                <Content style={{backgroundColor: 'rgba(0,0,0,.3)', color: '#fff'}}>
                    <Router></Router>
                </Content>
            </Layout>
        </Layout>
    )
  }
}