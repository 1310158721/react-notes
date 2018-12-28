import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Node from '../components/node/node'
import Css from '../components/css/css'
import Stylus from '../components/css/stylus'
import Less from '../components/css/less'
import Sass from '../components/css/sass'
import JsRaw from '../components/javascript/raw'
import Jq from '../components/javascript/jq'
import JsOther from '../components/javascript/other'

export default class Router extends React.Component {
	render () {
		return (
			<Switch>
			    <Route path="/router/node" component={Node} />
			    <Route path="/router/css" component={Css} />
			    <Route path="/router/less" component={Less} />
			    <Route path="/router/sass" component={Sass} />
			    <Route path="/router/stylus" component={Stylus} />
			    <Route path="/router/js-raw" component={JsRaw} />
			    <Route path="/router/jq" component={Jq} />
			    <Route path="/router/js-other" component={JsOther} />
			</Switch>
		)
	}
}
