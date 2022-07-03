import React from "react";
import { useState, useEffect } from "react";

const ScreenSize = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => {
				setWidth(window.innerWidth);
				setHeight(window.innerHeight);
				return () => {
					window.removeEventListener("resize", () => {
						setWidth(window.innerWidth);
						setHeight(window.innerHeight);
					});
				};
			},
			[width, height]
		);
	});

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-blue-400">
			<h1 className="sm:text-3xl text-1xl ">Your Screen Resolution is</h1>
			<h3 className="sm:text-8xl text-4xl font-bold text-blue-100 ">
				{width} * {height}
			</h3>
		</div>
	);
};

export default ScreenSize;
