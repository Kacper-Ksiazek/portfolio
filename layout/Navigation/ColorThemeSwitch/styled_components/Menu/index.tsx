// Tools
import { styled } from "@mui/material";
import introAnimations from "./introAnimations";
import outroAnimations from "./outroAnimations";

export default styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: "0px",
    minWidth: "100%",
    transform: "translateY(100%)",
    left: "0",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",

    ".exit-button": {
        position: "relative",
        alignSelf: "flex-start",
        marginTop: "16px",
        left: "5px",
        "&::after": {
            content: "''",
            background: "#fff",
            borderRadius: "5px",
            ...theme.mixins.absolute_full,
        },
    },

    "&.intro": {
        ...(introAnimations as any),
    },

    "&.outro": {
        ...(outroAnimations as any),
    },
}));
