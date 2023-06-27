// Tools
import { styled } from "@mui/material";
import { SELECTORS } from "./css_references";
// Styled components
import FullWithSectionWithResponsiveMargin from "components/atoms/content_placement/SectionWrapper/FullWithSectionWithResponsiveMargin";

export default styled(FullWithSectionWithResponsiveMargin)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: "1040px",
    margin: 0,
    [SELECTORS.TASKS_WRAPPER]: {
        minHeight: "406px",
    },
}));
