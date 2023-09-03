// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    zIndex: 20,
    transform: "translate(calc(-100% + 40px), 40px)",
    animation: `${fadeSimple} .3s linear both`,
    "&.outro": {
        animation: `${fadeSimpleOUT} .3s linear both`,
    },

    background: theme.palette.mode === "light" ? theme.palette.background.MUIFormElementsBackground : theme.palette.background.default,
    listStyleType: "none",
    padding: "4px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "3px",
}));
