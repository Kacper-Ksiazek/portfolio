// Tools
import { styled } from "@mui/material";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    minWidth: "800px",
    img: {
        transition: "transform 1s",
        maxHeight: "110% !important",
        height: "110% !important",
        animation: `${fadeSimple} 4s 3s both linear`,
        transform: "scale(1.1)",
    },
}));
