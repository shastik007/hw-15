import React, { Component } from 'react'
import Input from './UI/Input'
import Button from './UI/Button'
import TodoContext from '../store/TodoContext'
import classes from './TodoForm.module.css'
import AlertWarning from './UI/Alert'
import Card from './UI/Card'

class TodoForm extends Component {
	constructor() {
		super()
		this.state = {
			text: '',
			date: '',
		}
	}

	static contextType = TodoContext

	onChangeTask(e) {
		this.setState((prev) => ({ ...prev, text: e.target.value }))
	}
	onChangeDate(e) {
		this.setState((prev) => ({ ...prev, date: e.target.value }))
	}

	onSubmit(e) {
		e.preventDefault()
		if (this.state.text.trim().length > 0 && this.state.date.length > 0) {
			this.context.reducer('ADD', {
				...this.state,
				id: Math.random().toString(),
				complete: false,
			})
			this.setState({text:'',date:''})
			this.context.reducer('CLOSE_MODAL')
		} else {
			this.context.reducer('WARNING_MODAL')
		}
	}

	render() {
		if (this.context.state.modal !== null) {
			setTimeout(() => {
				this.context.reducer('CLOSE_MODAL')
			}, 6000)
		}
		return (
			<Card>
				<form
					className={classes.form}
					onSubmit={this.onSubmit.bind(this)}
				>
					<Input
						placeholder='Task'
						onChange={this.onChangeTask.bind(this)}
						type='text'
						value={this.state.text}
					/>
					<Input
						placeholder='Date'
						onChange={this.onChangeDate.bind(this)}
						type='date'
						value={this.state.date}
					/>
					<Button type='submit'>Add Task</Button>
				</form>
				{this.context.state.modal && (
					<AlertWarning
						title={this.context.state.modal.title}
						onClose={this.context.reducer}
						className={classes.alert}
					/>
				)}
			</Card>
		)
	}
}

export default TodoForm
