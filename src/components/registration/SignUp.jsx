import { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const SignUp = () => {
	const [lastName, setLastName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userName, setUserName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newData = {
			lastName,
		};
	};
	return (
		<div>
			<Input  />
			<Button>Add</Button>
		</div>
	);
};

export default SignUp;
