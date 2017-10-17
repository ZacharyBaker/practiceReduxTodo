import React from 'react'
import { addTodo } from '../actions/actionCreators'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'

// const mapStateToProps = () => {

// }

const mapDispatchToProps = dispatch => {
	return {
		addTodo: text => {
			return dispatch(addTodo(text))
		}
	}
}

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo)
export default AddTodoContainer