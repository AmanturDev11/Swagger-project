/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

const Input = ({ onChange, value, type = "text", placeholder, ...rest }) => {
	return (
		<TextField
			onChange={onChange}
			value={value}
			type={type}
			placeholder={placeholder}
			{...rest}
		/>
	);
};

export default Input;
