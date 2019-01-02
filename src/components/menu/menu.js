import React from 'react'
import { Menu, Icon } from 'antd'
import { axiosGet } from '../../axios/axios'
import './menu.css'

const { SubMenu } = Menu


export default class MyMenu extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			menuInfo: null
		}
	}
	componentWillMount () {
		axiosGet('/menu.json').then(res => {
			if (res.data.code === 200) {
				this.setState({
			    	menuInfo: res.data.body
			    })
			}
		})
	}
	render () {
		return (
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['100']}>
                {
                    this.state.menuInfo
                    &&
                    this.state.menuInfo.map(item =>
                    	item.children
                    	?
                        <SubMenu key={item.key} title={<span><Icon type={item.icon} />{item.label}</span>}>
                            {
                            	item.children.map(_item =>
                            		<Menu.Item key={_item.key}>{_item.label}</Menu.Item>
                            	)
                            }
                        </SubMenu>
                        :
                        <Menu.Item key={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.label}</span>
                        </Menu.Item>
                    )
                }
            </Menu>
		)
	}
}