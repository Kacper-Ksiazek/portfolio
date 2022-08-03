// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components
export default styled("span")(({ theme }) => ({
    transform: "rotate(10deg)",
    height: "20px",
    width: "2px",
    background: theme.palette.text.secondary,
    margin: "0 10px",
    "&:nth-of-type(1)": {
        animation: `${fadeSimple} .2s .8s both linear`,
    },
    "&:nth-of-type(2)": {
        animation: `${fadeSimple} .2s .9s both linear`,
    },
    "&:nth-of-type(3)": {
        animation: `${fadeSimple} .2s 1s both linear`,
    },
}));
