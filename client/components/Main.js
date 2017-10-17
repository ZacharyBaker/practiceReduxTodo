import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import FooterContainer from '../containers/FooterContainer'
import './Main.scss'

const Main = () => {
	return (
		<div className="mainWrap">
			<AddTodoContainer />
			<TodoListContainer />
			<FooterContainer />
		</div>
	)
}

export default Main