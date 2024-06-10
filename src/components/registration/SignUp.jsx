import { useState } from "react";
import Input from "../UI/Input";
import { authPost } from "../../store/authSlice/authThunk";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import scss from "./SignUp.module.scss";

const SignUp = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const handlerName = (e) => setName(e.target.value);
	const handlerEmail = (e) => setEmail(e.target.value);
	const handlerPassword = (e) => setPassword(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newDate = {
			name,
			email,
			password,
		};
		dispatch(authPost({ newDate, navigate }));
		setName("");
		setEmail("");
		setPassword("");
	};

	return (
		<div className={scss.SignUp}>
			<div className="container">
				<div className={scss.content}>
					<form onSubmit={handleSubmit}>
						<div className={scss.cards}>
							<Input
								label="Имя пользователя"
								onChange={(e) => setName(e.target.value)}
								value={name}
								// type="text"
							/>
							<Input
								label="Почта"
								onChange={handlerEmail}
								value={email}
								type="email"
							/>
							<Input
								label="Пароль"
								onChange={handlerPassword}
								value={password}
								type="password"
							/>
							<Button type="submit">Зарегистрироваться</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
