// Tools
import RWD from "./RWD";
import { styled } from "@mui/material";
import introAnimations from "./introAnimations";
import minigameProcessing from "./minigame_animations/processing";
import throphyCollecting from "./minigame_animations/throphy_collecting";
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
    "&.intro-animations": {
        ...(introAnimations as any),
    },
    //
    "&.minigame-processing-animations": {
        ...(minigameProcessing as any),
    },
    //
    "&.minigame-throphy-is-being-collected-animations": {
        ...(throphyCollecting as any),
    },
}));
