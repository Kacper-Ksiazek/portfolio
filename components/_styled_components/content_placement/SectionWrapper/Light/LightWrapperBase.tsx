// Tools
import { styled } from "@mui/system";
// Styled components
import SectionWrapper from "../_SectionWrapper";

export default styled(SectionWrapper)(({ theme }) => ({
    background: "white",
    padding: "40px 64px",
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
        padding: "40px 32px",
        "&.round-left, &.round-right": {
            borderRadius: "20px ",
        },
    },
    ["@media (max-width:1000px)"]: {
        "&.limited-height": {
            height: "auto",
        },
    },
    ["@media (max-width:600px)"]: {
        padding: "20px",
    },
    ["@media (max-width:500px)"]: {
        padding: "20px 10px",
    },
}));
