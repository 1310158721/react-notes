import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Error from './components/error/error'
import './common/style/antd.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class Pages extends React.Component {
	render () {
		return (
			<BrowserRouter>
			    <Switch>
			        <Route path='/router' component={App} />
			        <Route path="/error" component={Error} />
			        <Route exact path='/' render={ () => <Redirect to='/router/node' /> } />
			    </Switch>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<Pages />, document.getElementById('root'))
