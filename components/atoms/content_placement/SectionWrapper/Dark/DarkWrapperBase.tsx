// Tools
import { styled } from "@mui/system";
import introAnimations from "./introAnimations";
// Styled components
import SectionWrapper from "../_SectionWrapper";

export default styled(SectionWrapper)(({ theme }) => ({
    background: theme.palette.background.paper,
    boxSizing: "border-box",
    borderRadius: "20px",
    overflow: "hidden",
    "&>*": {
        visibility: "hidden",
    },
    ...(introAnimations as any),
}));
