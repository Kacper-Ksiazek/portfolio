// Tools
import { styled } from "@mui/system";
// Styled components
import SectionWrapper from "../_SectionWrapper";

export default styled(SectionWrapper)(({ theme }) => ({
    background: "white",
    padding: "40px 0",
    boxSizing: "border-box",
    height: "800px",
    "&.round-left": {
        borderRadius: "100px 20px 100px 20px",
    },
    "&.round-right": {
        borderRadius: "20px 100px 20px 100px",
    },
}));
