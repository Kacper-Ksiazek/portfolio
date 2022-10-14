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
    "&.left::before": {
        background: "url(/images/components/dark-section-wrapper/left.svg)",
    },
    "&.right::before": {
        background: "url(/images/components/dark-section-wrapper/right.svg)",
    },
    "&::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat !important",
        backgroundPosition: "center ",
        backgroundSize: "cover !important",
    },
    //
    ...(introAnimations as any),
}));
