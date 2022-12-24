// Tools
import { styled, alpha } from "@mui/system";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

const ContinueButton = styled(StyledButton)(({ theme }) => ({
    height: "32px",
    marginBottom: "24px",
    span: {
        marginLeft: "8px",
    },
    "&:disabled": {
        background: alpha("#000", 0.35),
        color: alpha("#fff", 0.3),
        borderColor: "transparent",
    },
}));

export default ContinueButton;
