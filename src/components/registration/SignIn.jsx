import { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { signInPost } from "../../store/authSlice/authThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import scss from "./SignIn.module.scss";

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
	const handleNavigate = () => {
		navigate("/signUp");
	};
	return (
		<div className={scss.SignIn}>
			<div className="container">
				<div className={scss.content}>
					<form onSubmit={handleSubmit}>
						<div className={scss.cards}>
							<Input label="email" value={email} onChange={handlerEmail} />
							<Input
								label="Пароль"
								onChange={handlerPassword}
								value={password}
								// type="password"
							/>
							<Button type="submit">Войти</Button>
							<Button onClick={handleNavigate}>Зарегистрироваться</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
