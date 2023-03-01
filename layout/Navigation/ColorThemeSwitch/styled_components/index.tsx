// Tools
import { styled } from "@mui/material";
// Styled components
import ExitButton from "./ExitButton";

export { ExitButton };

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

export const Menu = styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: "0px",
    width: "100%",
    transform: "translateY(100%)",
    left: "0",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
}));
