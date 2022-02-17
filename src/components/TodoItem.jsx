import styled from 'styled-components'

const TodoItem = styled.li`
	width: 500px;
	height: 60px;
	border: red;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	& label {
		width: 150px;
	}
    & button{
        width: 150px;
        height: 20px;
    }
`

export default TodoItem
