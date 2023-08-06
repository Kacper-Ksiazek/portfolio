// Tools
import { styled } from "@mui/material";
// Styled components
import FullWithSectionWithResponsiveMargin from "./FullWithSectionWithResponsiveMargin";

export default styled(FullWithSectionWithResponsiveMargin)(({ theme }) => ({
    marginBottom: "64px",
    position: "relative",
    padding: "64px 64px 24px 64px",
    "@media (max-width:1100px)": {
        padding: "48px 32px",
        "&.round-left, &.round-right": {
            borderRadius: "20px ",
        },
    },
    "@media (max-width:600px)": {
        padding: "48px 24px",
    },
    "@media (max-width:500px)": {
        padding: "48px 12px 32px 12px",
    },
}));
