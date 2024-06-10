/* eslint-disable react/prop-types */
import { Button as MuiButton } from "@mui/material";

const Button = ({ children, type = "button", ...rest }) => {
	return (
		<MuiButton type={type} {...rest}>
			{children}
		</MuiButton>
	);
};

export default Button;
