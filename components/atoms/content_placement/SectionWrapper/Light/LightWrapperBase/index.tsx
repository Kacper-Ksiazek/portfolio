// Tools
import RWD from "./RWD";
import { styled } from "@mui/system";
import introAnimations from "./introAnimations";
import { mergeSXObjects } from "@/utils/client/mergeSXObjects";
// Styled components
import SectionWrapper from "../../_SectionWrapper";

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
    //
    ...mergeSXObjects(RWD, introAnimations),
}));
