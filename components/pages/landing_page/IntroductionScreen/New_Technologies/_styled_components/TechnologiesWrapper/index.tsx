// Tools
import RWD from "./RWD";
import { styled } from "@mui/system";
import introAnimations from "./introAnimations";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10,
    display: "flex",
    justifyContent: "space-between",
    //
    ...(RWD as any),
    ...(introAnimations as any),
}));
