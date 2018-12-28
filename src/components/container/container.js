import React from 'react'
import './container.css'

import {
  Layout, Menu, Icon,
} from 'antd';

const {
  Header, Content, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

export default class Container extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  headerClick () {
  	console.log(123)
  	this.setState({
  		collapsed: !this.state.collapsed
  	})
  }
  render() {
    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: 'gray' }}>
            <Header style={{position: 'fixed', width: '100%', zIndex: 1, color: '#fff' }} onClick={this.headerClick.bind(this)}>123</Header>
            <Layout style={{marginTop: 64}}>
                <Sider collapsed={this.state.collapsed} style={{color: '#fff', position: 'relative', backgroundColor: '#001529'}}>
                    <div style={{position: 'fixed', width: 200}}>
                        <Menu
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                          mode="inline"
                          theme="dark"
                          inlineCollapsed={this.state.collapsed}
                        >
                          <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                          </Menu.Item>
                          <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                          </Menu.Item>
                          <Menu.Item key="3">
                            <Icon type="inbox" />
                            <span>Option 3</span>
                          </Menu.Item>
                          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                          </SubMenu>
                          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                              <Menu.Item key="11">Option 11</Menu.Item>
                              <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </Menu>
                    </div>
                </Sider>
                <Content style={{backgroundColor: 'rgba(0,0,0,.3)', color: '#fff'}}>
                    <div style={{height: 2000, color: '#fff'}}>525</div>
                </Content>
            </Layout>
        </Layout>
    )
  }
}