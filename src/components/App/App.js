import React from "react";
import { useState } from "react";
import ArrayHook from "../ArrayHook/ArrayHook";
import SpreadOperator from "../SpreadOperator/SpreadOperator";
import AddContact from "../AddContact/AddContact";
import Todo from "../Todo/Todo";
import ScreenSize from "../ScreenSize/ScreenSize";

const App = () => {
	const [name, setName] = useState("Vijay Choudhary");

	const changeName = () => {
		name === "Vijay Choudhary" ? setName("Nothing Special") : setName("Vijay Choudhary");
	};
	return (
		<div className="scroll-smooth">
			{/* <div className="w-screen h-screen  bg-gradient-to-t from-sky-300 flex justify-center items-center flex-col">
				<h1 className="text-5xl font-semibold">{name}</h1>
				<button onClick={changeName} className="select-none my-4 px-4 py-2 bg-white rounded-xl hover:bg-black hover:text-white">
					Change Name
				</button>
			</div> */}
			{/* <ArrayHook /> */}
			{/* <ArrayHook /> */}
			{/* <AddContact /> */}
			{/* <Todo /> */}
			<ScreenSize />
		</div>
	);
};

export default App;
