import React from 'react'
import { Button } from '@material-ui/core'
import axios from 'axios'
import MenuAppBar from './components/MenuAppBar'


class App extends React.Component {
	handleClick = () => {
		axios.get('https://api.github.com/')
			.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
	}
	render() {
		return (
			<div>
				<MenuAppBar />
				<h1>Hello world</h1>
				<Button color="primary" onClick={this.handleClick}>Hello again!</Button>
			</div>
		)
	}
}

export default App;
