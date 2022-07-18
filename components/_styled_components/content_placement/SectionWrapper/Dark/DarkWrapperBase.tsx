// Tools
import { styled } from "@mui/system";
// Styled components
import SectionWrapper from "../_SectionWrapper";

export default styled(SectionWrapper)(({ theme }) => ({
    background: theme.palette.background.paper,
    padding: "24px 0",
    boxSizing: "border-box",
    borderRadius: "20px",
    height: "350px",
    overflow: "hidden",
}));
