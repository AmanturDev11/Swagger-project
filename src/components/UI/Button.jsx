/* eslint-disable react/prop-types */
import { Button as MuiButton } from "@mui/material";

const Button = ({ children, onClick, type = "button", ...rest }) => {
	return (
		<MuiButton onClick={onClick} type={type} {...rest}>
			{children}
		</MuiButton>
	);
};

export default Button;
