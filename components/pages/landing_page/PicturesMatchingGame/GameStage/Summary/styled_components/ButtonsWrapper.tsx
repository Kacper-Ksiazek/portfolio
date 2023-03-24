// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";

export default styled("div")(({ theme }) => ({
    display: "flex",
    margin: "24px 0 64px 0",
    button: {
        padding: "6px 24px",
        fontSize: "20px",
        "&:nth-of-type(1)": {
            animation: `${fadeSimple} .3s 1.2s both`,
        },
        "&:nth-of-type(2)": {
            animation: `${fadeSimple} .3s 1.3s both`,
        },
    },
}));
