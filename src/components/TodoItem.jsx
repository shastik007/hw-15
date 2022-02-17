import styled from 'styled-components'

const TodoItem = styled.li`
	width: 500px;
	height: 40px;
	border: red;
	display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
	& label {
		width: 150px;
        align-items: center;
        text-decoration: ${(props)=>props.complete && 'line-through'};
	}
    & button{
        width: 100px;
        height: 25px;
    }
`

export default TodoItem
