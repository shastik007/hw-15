import React, { Component } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'

class App extends Component {
	constructor() {
		super()
		this.state = {
			todos: [],
		}
	}

	onAdd(obj) {
		this.setState((prev) => ({ todos: [...prev.todos, obj] }))
	}

	render() {
		console.log(this.state)
		return (
			<div className='App'>
				<TodoForm onAdd={this.onAdd} />
			</div>
		)
	}
}

export default App
