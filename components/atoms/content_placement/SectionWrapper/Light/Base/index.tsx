// Tools
import RWD from "./RWD";
import { styled } from "@mui/material";
// Styled components
import SectionWrapper from "../../_SectionWrapper";

export default styled(SectionWrapper)(({ theme }) => ({
    background: theme.palette.background.lightSectionBackground,
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
    //
    ...(RWD as any),
}));
