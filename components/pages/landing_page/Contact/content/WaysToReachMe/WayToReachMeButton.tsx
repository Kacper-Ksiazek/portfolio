// Tools
import { styled } from "@mui/material";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

export default styled(StyledButton)(({ theme }) => ({
    width: "32px",
    height: "32px",
    margin: 0,
    position: "absolute",
    top: "50%",
    right: "8px",
    overflow: "hidden",
    transform: "translateY(-50%)",
    transition: "all .3s !important",
}));
