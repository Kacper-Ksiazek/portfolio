// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Other components
import _StyledButton from "@/components/atoms/forms/StyledButton";

export const StyledButton = styled(_StyledButton)(({ theme }) => ({}));

export const ButtonsWrapper = styled("div")(({ theme }) => ({
    animation: `${fadeSimple} .3s both`,
    paddingBottom: "48px",
    paddingTop: "16px",
}));
