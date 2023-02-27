// Tools
import RWD from "./RWD";
import introAnimations from "./introAnimations";
import { styled } from "@mui/material";
import { mergeSXObjects } from "@/utils/client/mergeSXObjects";
// Styled components
import MinigameStage from "@/components/pages/landing_page/IntroductionScreen/MinigameStages/_MinigameStage";

export default styled(MinigameStage)(({ theme }) => ({
    ...(mergeSXObjects(RWD, introAnimations) as any),
}));
