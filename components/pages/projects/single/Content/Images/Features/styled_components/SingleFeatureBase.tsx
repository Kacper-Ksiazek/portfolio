// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components
export default styled("div")(({ theme }) => ({
    width: "calc(20% - calc(80px / 5))",
    height: "200px",
    "&:not(&:nth-of-type(5n))": {
        marginRight: "20px",
    },
    "&:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3),&:nth-of-type(4),&:nth-of-type(5)": {
        background: "yellow",
        marginTop: 0,
    },
    animation: `${fadeSimple} .3s both linear`,
    marginTop: "20px",
    background: "red",
    position: "relative",
    borderRadius: "3px",
    border: `2px solid ${theme.palette.background.paper}`,
    boxSizing: "border-box",
    filter: "grayscale(1)",
    transition: "filter .3s",
    cursor: "pointer",
    img: {
        transition: "transform .3s",
    },
    "&:hover": {
        filter: "grayscale(0)",
        img: {
            transform: "scale(1.05)",
        },
        "svg.main-icon": {
            opacity: 0.3,
        },
    },
}));
