import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import { createStore } from 'redux'
import TodoApp from './reducers/index'
import { Provider } from 'react-redux'

const store = createStore(
	TodoApp,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
	<Provider store={store}>
		<Main />
	</Provider>,
document.getElementById('root')
)