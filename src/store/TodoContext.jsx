import React, { Component } from 'react'

const TodoContext = React.createContext({
	state: [],
	reducer: () => {},
})

export class TodoContextProvider extends Component {
	constructor() {
		super()
		this.state = {
			todos: [],
		}
	}
	reducer = (action, obj) => {
		switch (action) {
			case 'ADD':
				this.setState({ todos: [obj, ...this.state.todos] })
				break
			case 'DELETE':
				this.setState({
					todos: [
						...this.state.todos.filter((el) => el.id !== obj.id),
					],
				})
				break
			case 'CHECKED':
				this.setState({
					todos: [
						...this.state.todos.map((el) =>
							el.id === obj.id
								? { ...el, complete: !el.complete }
								: el,
						),
					],
				})
				break
			default:
				break
		}
	}

	componentDidMount() {
		const localData = JSON.parse(localStorage.getItem('todos'))
		this.setState({ todos: localData ? [...localData] : [] })
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.todos !== this.state.todos) {
			localStorage.setItem('todos', JSON.stringify(this.state.todos))
		}
	}

	render() {
		console.log(this.state)
		return (
			<TodoContext.Provider
				value={{ state: this.state, reducer: this.reducer }}
			>
				{this.props.children}
			</TodoContext.Provider>
		)
	}
}

export default TodoContext
