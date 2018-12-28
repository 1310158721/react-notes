import React from 'react'
import './myMenu.css'
import { axiosGet } from '../../axios/axios'

import { Menu, Icon, Layout } from 'antd'

const {
  Sider
} = Layout

const SubMenu = Menu.SubMenu

export default class MyMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuInfo: null,
      selectedKeys: ['100'],
      openKeys: ['200']
    }
  }
  componentWillMount () {
    this.getMyMenuApi()
  }
  // 获取菜单接口
  getMyMenuApi () {
    axiosGet('menu.json').then(res => {
      if (res.data.code === 200) {
        this.setState({
          menuInfo: res.data.body
        })
      }
    })
  }
  menuSubOpenChange (openKeys) {
    console.log(openKeys)
  }
  // 做动态路由跳转
  menuItemClick () {
    console.log(this.props)
  }
  render() {
    return (
      <Sider collapsed={this.props.collapsed} style={{color: '#fff', position: 'relative', backgroundColor: '#001529'}}>
          <div className="myMenu" style={{position: 'fixed', width: 200}}>
              <Menu
                defaultSelectedKeys={this.state.selectedKeys}
                defaultOpenKeys={this.state.openKeys}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.props.collapsed}
                onOpenChange={this.menuSubOpenChange.bind(this)}
                onClick={this.menuItemClick.bind(this)}
              >
                {
                  this.state.menuInfo 
                  &&
                  this.state.menuInfo.map(item => 
                    item.children
                    ?
                    <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.label}</span></span>}>
                      {
                        item.children.map(_item => 
                          <Menu.Item key={_item.key}>
                            {_item.label}
                          </Menu.Item>
                        )
                      }
                    </SubMenu>
                    :
                    <Menu.Item key={item.key} >
                      <Icon type={item.icon} />
                      <span>
                        {item.label}
                      </span>
                    </Menu.Item>
                  )
                }
              </Menu>
          </div>
      </Sider>
    )
  }
}
