import React from "react";
import { useState } from "react";

const AddContact = () => {
	const Data = [
		{ firstName: "Vijay", lastName: "Choudhary" },
		{ firstName: "Ajay", lastName: "Choudhary" },
		{ firstName: "Raman", lastName: "Choudhary" },
	];
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [Dataa, setData] = useState(Data);
	const handleSubmit = (e) => {
		e.preventDefault();
		setData([...Dataa, { firstName, lastName }]);
		setFirstName("");
		setLastName("");
		console.log(Data);
	};
	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<label htmlFor="FirstName">First Name</label>
				<input type="text" name="FirstName" id="" onChange={(e) => setFirstName(e.target.value)} />
				<label htmlFor="LastName">LastName</label>
				<input type="text" name="LastName" id="" onChange={(e) => setLastName(e.target.value)} />
				<input
					type="submit"
					value="Submit"
					onClick={(e) => {
						handleSubmit(e);
					}}
				/>
			</form>
			{Dataa.map((item) => {
				return <h1>{item.firstName + " " + item.lastName}</h1>;
			})}
		</div>
	);
};

export default AddContact;
