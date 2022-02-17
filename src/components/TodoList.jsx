import React, { Component } from 'react'
import Card from './UI/Card'
import TodoContext from '../store/TodoContext'
import TodoItem from './TodoItem'

class TodoList extends Component {
	static contextType = TodoContext

	onChangeHandler = (e) => {
		this.context.reducer('CHECKED', { id: e.target.id })
	}
	onDeleteHandler = (e) => {
		this.context.reducer('DELETE', { id: e.target.id })
	}

	render() {
		return (
			<Card>
				{this.context.state.todos.map((el) => {
					return (
						<TodoItem complete={el.complete} key={el.id}>
							<label>{el.text}</label>
							<label>{el.date}</label>
							<input
								onChange={this.onChangeHandler}
								checked={el.complete}
								id={el.id}
								type='checkbox'
							/>
							<button id={el.id} onClick={this.onDeleteHandler}>
								delete
							</button>
						</TodoItem>
					)
				})}
			</Card>
		)
	}
}

export default TodoList
