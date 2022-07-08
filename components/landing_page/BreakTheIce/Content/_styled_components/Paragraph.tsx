// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/fadeFromLeft";
// Styled components
export default styled("p")(({ theme }) => ({
    fontSize: "18px",
    margin: "20px 0 0 0",
    strong: {
        color: theme.palette.secondary.main,
    },
    "&:nth-of-type(1)": {
        margin: "0",
        animation: `${fadeFromLeft} .3s .7s both`,
    },
    "&:nth-of-type(2)": {
        animation: `${fadeFromLeft} .3s .8s both`,
    },
    "&:nth-of-type(3)": {
        animation: `${fadeFromLeft} .3s .9s both`,
    },
}));
