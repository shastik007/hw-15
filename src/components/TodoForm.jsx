import React, { Component } from 'react'
import Card from './UI/Card'
import Input from './UI/Input'
import Button from './UI/Button'
import TodoContext from '../store/TodoContext'

class TodoForm extends Component {
	constructor() {
		super()
		this.state = {
			text: '',
			date: '',
		}
	}

	onChangeTask(e) {
		this.setState((prev) => ({ ...prev, text: e.target.value }))
	}
	onChangeDate(e) {
		this.setState((prev) => ({ ...prev, date: e.target.value }))
	}

	onSubmit(e) {
		e.preventDefault()
		if (this.state.text.trim().length > 0) {
			this.props.onAdd(this.state)
		}
	}

	render() {
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				<Input
					onChange={this.onChangeTask.bind(this)}
					type='text'
					value={this.state.text}
				/>
				<Input
					onChange={this.onChangeDate.bind(this)}
					type='date'
					value={this.state.date}
				/>
				<Button type='submit'>Add Task</Button>
			</form>
		)
	}
}

export default TodoForm
