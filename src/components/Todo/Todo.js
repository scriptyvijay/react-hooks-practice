import React from "react";
import { useState, useEffect } from "react";

const Todo = () => {
	useEffect(() => {}, []);
	const [task, setTask] = useState("");
	const [data, setData] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setData([...data, task]);
		localStorage.setItem("data", JSON.stringify(data));
		setTask("");
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<label htmlFor="Todo">Todo</label>
				<input
					type="text"
					name="todo-text"
					id=""
					value={task}
					onChange={(e) => {
						setTask(e.target.value);
					}}
				/>
				<input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
			</form>
		</div>
	);
};

export default Todo;
