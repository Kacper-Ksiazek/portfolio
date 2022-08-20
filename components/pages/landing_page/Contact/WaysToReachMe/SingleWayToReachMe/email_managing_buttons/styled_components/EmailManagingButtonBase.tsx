// Tools
import { styled } from "@mui/system";
// Styled components
import StyledButton from "@/components/_styled_components/forms/StyledButton";

export default styled(StyledButton)(({ theme }) => ({
    width: "32px",
    height: "32px",
    margin: 0,
    position: "absolute",
    top: "50%",
    right: "8px",
    transform: "translateY(-50%)",
}));
