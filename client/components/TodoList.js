import React from 'react'
import './TodoList.scss'

const TodoList = (props) => {
	return (
		<div>
			<h1>TODO</h1>
			{props.todos.map(({ text, id, completed }) => {
				return (
					<div
						className="todoItem"
						key={id}
						onClick={()=>props.toggleTodo(id)}
						style={{
				      opacity: completed ? '.3' : '1'
				    }}
					>
						{text}
						<span onClick={()=>props.deleteTodo(id)}>x</span>
					</div>
				)
			})}
		</div>
	)
}

export default TodoList