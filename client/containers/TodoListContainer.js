import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, deleteTodo } from '../actions/actionCreators'

const mapStateToProps = state => {
	switch (state.visibilityFilter) {
		case 'ALL':
			return {todos: state.todos}
		case 'COMPLETE':
			return {todos: state.todos.filter(todo=>todo.completed)}
		case 'INCOMPLETE':
			return {todos: state.todos.filter(todo=>!todo.completed)}
		default:
			return {todos: state.todos}
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleTodo: id => {
			dispatch(toggleTodo(id))
		},
		deleteTodo: id => {
			dispatch(deleteTodo(id))
		}
	}
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoListContainer