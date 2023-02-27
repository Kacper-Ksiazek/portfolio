// Tools
import RWD from "./RWD";
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    marginTop: "20px",
    position: "relative",
    borderRadius: "5px",
    border: `2px solid ${theme.palette.background.paper}`,
    boxSizing: "border-box",
    cursor: "pointer",
    overflow: "hidden",
    img: {
        transition: "transform .3s, filter .3s",
        filter: "grayscale(0)",
    },
    "&:hover": {
        img: {
            transform: "scale(1.05)",
            filter: "grayscale(0)",
        },
        "svg.main-icon": {
            opacity: 0.3,
        },
    },
    ...(RWD as any),
}));
