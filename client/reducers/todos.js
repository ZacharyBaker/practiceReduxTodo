const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state,
				{
					text: action.text,
					id: action.id,
					completed: action.completed
				}
			]
		case 'TOGGLE_TODO':
			return state.map(todo => {
					return todo.id === action.id ? {...todo, completed: !todo.completed} : todo
				})
		case 'DELETE_TODO':
			return state.filter(todo => todo.id !== action.id)
		default:
			return state
	}
}

export default todos