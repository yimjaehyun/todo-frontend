import React, {useState} from 'react'
import TodoForm from './TodoForm'

function Todo({ todos, completeTodo }) {
	return todos.map((todo, index) => (
		<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.description}
			</div>
		</div>
	))
}

export default Todo
