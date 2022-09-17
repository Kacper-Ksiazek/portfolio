// Tools
import RWD from "./RWD";
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components
export default styled("div")(({ theme }) => ({
    animation: `${fadeSimple} .3s both linear`,
    marginTop: "20px",
    position: "relative",
    borderRadius: "3px",
    border: `2px solid ${theme.palette.background.paper}`,
    boxSizing: "border-box",
    cursor: "pointer",
    img: {
        transition: "transform .3s, filter .3s",
        filter: "grayscale(1)",
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
