// Tools
import { styled } from "@mui/material";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

export default styled(StyledButton)(({ theme }) => ({
    padding: 0,
    height: "42px",
    width: "86px",
    justifyContent: "flex-start",
    "@media (max-width:770px)": {
        fontSize: "18px",
        width: "100%",
        marginTop: "24px",
        svg: {
            fontSize: "26px",
        },
    },
    "@media (max-width:700px)": {
        justifyContent: "center",
    },
}));
