import React, {useState} from 'react'
import TodoForm from './TodoForm'

function Todo({ todos, completeTodo }) {
	return todos.map((todo, index) => (
		<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.description}  {todo.deadline}
				<span className={todo.isPassed ? 'passed' : 'not-passed'}>  DISMISSED</span>
			</div>
		</div>
	))
}

export default Todo
