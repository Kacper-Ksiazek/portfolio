// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Other components
import _StyledButton from "@/components/atoms/forms/StyledButton";

export const StyledButton = styled(_StyledButton)(({ theme }) => ({}));

export const ButtonsWrapper = styled("div")(({ theme }) => ({
    animation: `${fadeSimple} .3s both`,
    paddingBottom: "64px",
    paddingTop: "24px",
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
