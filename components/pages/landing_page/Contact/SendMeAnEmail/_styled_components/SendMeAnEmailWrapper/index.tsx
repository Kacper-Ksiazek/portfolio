// Tools
import { styled } from "@mui/system";
import introAnimations from "./introAnimations";
// Styled components
export default styled("div")(({ theme }) => ({
    width: "calc(50% + 64px)",
    cursor: "default",
    position: "relative",
    padding: "10px",
    alignSelf: "flex-start",
    height: "600px",
    overflow: "hidden",
    boxSizing: "border-box",
    ...(introAnimations as any),
}));
