// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Other components
import _StyledButton from "@/components/atoms/forms/StyledButton";

export const StyledButton = styled(_StyledButton)(({ theme }) => ({
    fontSize: "20px",
    padding: "6px 48px",
    "&:disabled": {
        background: "#fff",
        opacity: 0.5,
    },
}));

export const ButtonsWrapper = styled("div")(({ theme }) => ({
    animation: `${fadeSimple} .3s both`,
    paddingBottom: "48px",
    paddingTop: "16px",
}));
