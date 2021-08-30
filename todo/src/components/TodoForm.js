import React, {useState} from 'react'

function TodoForm(props) {
	const [description, setDescription] = useState('')
	const [deadline, setDeadline] = useState('')
	const [file, setFile] = useState(null)

	const handleSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			description: description,
			deadline: deadline,
			attachment: file,
			isComplete: false
		})

		setDescription('')
		setDeadline('')
	}

	const handleDescChange = e => {
		setDescription(e.target.value);
	}
	const handleDeadlineChange = e => {
		setDeadline(e.target.value);
	}
	const handleFileChange = e => {
		setFile(e.target.value);
	}

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input 
				type="text" 
				placeholder="Description" 
				value={description} 
				name="text" 
				className="todo-input"
				onChange={handleDescChange}
			/>
			<input 
				type="text" 
				placeholder="Deadline in UTC" 
				value={deadline} 
				name="text" 
				className="todo-input"
				onChange={handleDeadlineChange}
			/>
			<input
				type="file"
				className="todo-input"
				onChange={handleFileChange}
			/>
			<button className="todo-button">Add</button>
		</form>
	)
}

export default TodoForm
