import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const TodoApp = combineReducers({
	todos,
	visibilityFilter
})

export default TodoApp