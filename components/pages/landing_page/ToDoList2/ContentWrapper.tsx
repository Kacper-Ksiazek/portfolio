// Tools
import { styled } from "@mui/material";
import { SELECTORS } from "./css_references";
// Styled components
export default styled("section")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "840px",
    [SELECTORS.TASKS_WRAPPER]: {
        minHeight: "406px",
    },
}));
