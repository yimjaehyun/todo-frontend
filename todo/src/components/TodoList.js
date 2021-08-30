import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const url = "http://localhost:8000/items"
		fetch(url)
			.then(res => res.json())
			.then(
				(result) => {
					console.log(result)
					setTodos(result)
				},
				(error) => {
					console.log(error)
				})
	}, [])

	const addTodo = todo => {
		if (!todo.description || /^\s*$/.test(todo.text)) {
			return
		}

		// Update DB
		const url = "http://localhost:8000/add/item"

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(todo)
		}

		fetch(url, requestOptions)
			.then(res => res.json())
			.then(
				(result) => {
					console.log("Sucessfully Updated DB")
				},
				(error) => {
					console.log(error)
				})

		const newTodos = [todo, ...todos]
		console.log(newTodos)
		setTodos(newTodos)
	}

	const completeTodo = id => {
		var newValue = false
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				newValue = !todo.isComplete
				todo.isComplete = newValue
			}
			return todo
		})

		// Update DB
		const url = "http://localhost:8000/complete/item/" + id

		const data = {
				"isComplete": newValue
		}
		const requestOptions = {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}

		fetch(url, requestOptions)
			.then(res => res.json())
			.then(
				(result) => {
					console.log("Sucessfully Updated DB")
				},
				(error) => {
					console.log(error)
				})

		setTodos(updatedTodos);
	}

	return (
		<div>
			<TodoForm onSubmit={addTodo} />
			<Todo todos={todos} completeTodo={completeTodo} />
		</div>
	)
}

export default TodoList
