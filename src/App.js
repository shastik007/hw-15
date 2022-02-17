import React, { Component } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { TodoContextProvider } from './store/TodoContext'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<TodoContextProvider>
					<TodoForm />
					<TodoList/>
				</TodoContextProvider>
			</div>
		)
	}
}

export default App
