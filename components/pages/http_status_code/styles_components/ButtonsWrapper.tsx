// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro/fade";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    a: {
        height: "42px",
        padding: "0px 32px",
        "&:not(&:nth-of-type(1))": {
            marginLeft: "10px",
        },
        "&:nth-of-type(1)": {
            animation: `${fadeSimple} .3s 1.2s linear both`,
        },
        "&:nth-of-type(2)": {
            animation: `${fadeSimple} .3s 1.3s linear both`,
        },
    },
}));
