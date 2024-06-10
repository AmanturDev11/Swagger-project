import { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { signInPost } from "../../store/authSlice/authThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlerEmail = (e) => setEmail(e.target.value);
	const handlerPassword = (e) => setPassword(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newDate = {
			email,
			password,
		};
		dispatch(signInPost({ newDate, navigate }));
		// setEmail("");
		// setPassword("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input label="email" value={email} onChange={handlerEmail} />
			<Input
				label="Пароль"
				onChange={handlerPassword}
				value={password}
				// type="password"
			/>
			<Button type="submit">Вход</Button>
		</form>
	);
};

export default SignIn;
