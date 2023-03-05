// Tools
import { styled } from "@mui/material";
// Styled components
import Menu from "./Menu";
import ExitButton from "./ExitButton";

export { Menu, ExitButton };

export const Wrapper = styled("div")(({ theme }) => ({
    position: "relative",
    marginLeft: "48px",
    button: {
        border: `1px solid ${theme.palette.text.primary}`,
        background: "transparent",
        borderRadius: "10px",
        height: "32px",
        position: "relative",
        padding: "0",
        boxSizing: "border-box",
        fontSize: "16px",
        fontWeight: 500,
    },
}));
