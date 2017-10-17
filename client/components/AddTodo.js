import React from 'react'
import './AddTodo.scss'

const AddTodo = (props) => {
	let input
	return (
		<div className="AddTodoWrap">
			<form
				onSubmit={e => {
					e.preventDefault()
					if (!input.value.trim()) {
            return
          }
          props.addTodo(input.value)
          input.value = ''
				}}
			>
				<input
          ref={node => {
            input = node
          }}
	       />
	       <button type="submit">
          Add Todo
	       </button>
			</form>
		</div>
	)
}

export default AddTodo