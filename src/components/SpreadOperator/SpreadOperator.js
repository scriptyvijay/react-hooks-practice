import React from "react";
import { useState } from "react";

const SpreadOperator = () => {
	const data = {
		id: 1,
		name: "Vijay",
		age: 25,
	};
	const [obj, setObj] = useState({ data });
	const changeName = () => {
		setObj({ data: { ...data, name: "Vijay Choudhary" } });
	};

	return (
		<div className="">
			<h1>
				Name: {obj.data.name} Age: {obj.data.age}
			</h1>
			<button onClick={changeName}>Change Name</button>
		</div>
	);
};

export default SpreadOperator;
