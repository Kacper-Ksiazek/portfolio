// Tools
import { styled } from "@mui/system";
import { mergeObjects } from "@/utils/client/mergeSXObjects";
//
import RWD from "./RWD";
import introAnimatins from "./introAnimations";
// Styled components
import Section from "@/components/atoms/content_placement/SectionWrapper/_SectionWrapper";

export default styled(Section)(({ theme }) => ({
    position: "relative",
    margin: "0 auto",
    overflow: "hidden",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    height: "100vh",
    marginBottom: "60px",
    //
    ...mergeObjects(introAnimatins, RWD),
}));
