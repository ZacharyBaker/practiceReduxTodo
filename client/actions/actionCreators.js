let id = 0
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text,
		id: id++,
		completed: false
	}
}

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const deleteTodo = (id) => {
	return {
		type: 'DELETE_TODO',
		id
	}
}