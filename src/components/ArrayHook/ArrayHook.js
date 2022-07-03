import React from "react";
import { useState } from "react";

const ArrayHook = () => {
	const [arr, setArr] = useState([
		{ id: 1, name: "Vijay", age: 25 },
		{ id: 2, name: "Raj", age: 26 },
		{ id: 3, name: "Rajesh", age: 27 },
		{ id: 4, name: "Ajay", age: 32 },
		{ id: 5, name: "Saurabh", age: 12 },
	]);

	const clearArray = () => {
		setArr([]);
	};
	return (
		<div className="flex items-center justify-center flex-col h-screen bg-gradient-to-t from-blue-300 select-none">
			{arr.map((item) => {
				return (
					<h1 className="bg-white my-2 w-4/12 text-3xl rounded-lg p-4 text-center">
						Name: {item.name}, age: {item.age}
					</h1>
				);
			})}
			<button className="py-2 bg-white px-20 my-4 rounded text-xl hover:bg-black hover:text-white" onClick={clearArray}>
				Clear
			</button>
		</div>
	);
};

export default ArrayHook;
