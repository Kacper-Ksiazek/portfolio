// Tools
import { styled } from "@mui/system";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

export default styled(StyledButton)(({ theme }) => ({
    fontFamily: "Montserrat Alternates",
    fontSize: "16px",
    padding: "2px 24px",
    boxSizing: "border-box",
    "svg.right-arrow": {
        marginLeft: "4px",
    },
    ["@media (max-width:500px)"]: {
        margin: 0,
        width: "100%",
    },

    "&.small": {
        fontSize: "14px",
        padding: "6px 16px",
        "svg.right-arrow": {
            fontSize: "16px",
        },
        ["@media (max-width:500px)"]: {
            fontSize: "16px",
        },
    },
}));
