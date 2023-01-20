// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";

export default styled("div")(({ theme }) => ({
    display: "flex",
    margin: "24px 0 16px 0",
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
