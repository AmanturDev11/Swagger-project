/* eslint-disable react/prop-types */
import { ButtonBase as MuiButton } from "@mui/material";

const Button = ({ children, onClick, type = "button", ...rest }) => {
	return (
		<MuiButton type={type} onClick={onClick} {...rest}>
			{children}
		</MuiButton>
	);
};

export default Button;
