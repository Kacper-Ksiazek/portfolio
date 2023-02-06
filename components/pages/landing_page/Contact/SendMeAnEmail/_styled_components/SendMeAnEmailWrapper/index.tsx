// Tools
import { styled } from "@mui/system";
import introAnimations from "./introAnimations";
// Styled components
export default styled("div")(({ theme }) => ({
    width: "calc(50% + 64px)",
    cursor: "default",
    position: "relative",
    alignSelf: "flex-start",
    height: "440px",
    overflow: "hidden",
    boxSizing: "border-box",
    ...(introAnimations as any),
}));
