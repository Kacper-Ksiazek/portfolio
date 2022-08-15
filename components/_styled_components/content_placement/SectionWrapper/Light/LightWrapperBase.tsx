// Tools
import { styled } from "@mui/system";
// Styled components
import SectionWrapper from "../_SectionWrapper";

export default styled(SectionWrapper)(({ theme }) => ({
    background: "white",
    overflow: "hidden",
    boxSizing: "border-box",
    "&.round-left": {
        borderRadius: "100px 20px 100px 20px",
    },
    "&.round-right": {
        borderRadius: "20px 100px 20px 100px",
    },
    "&.limited-height": {
        height: "800px",
    },
    ["@media (max-width:1100px)"]: {
        "&.round-left, &.round-right": {
            borderRadius: "20px ",
        },
    },
    ["@media (max-width:1000px)"]: {
        "&.limited-height": {
            height: "auto",
        },
    },
}));
