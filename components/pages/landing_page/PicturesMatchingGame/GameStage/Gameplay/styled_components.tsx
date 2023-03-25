// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
// Other components
import StyledButton from "@/components/atoms/forms/StyledButton";

export { StyledButton };

export const ButtonsWrapper = styled("div")(({ theme }) => ({
    animation: `${fadeSimple} .3s both`,
    paddingTop: "24px",
    paddingBottom: "32px",
    display: "flex",
    "@media (max-width:840px)": {
        button: {
            width: "200px",
        },
    },
    "@media (max-width:600px)": {
        paddingTop: "36px",
        width: "100%",
        button: {
            width: "calc(50% - 5px)",
        },
    },
}));
