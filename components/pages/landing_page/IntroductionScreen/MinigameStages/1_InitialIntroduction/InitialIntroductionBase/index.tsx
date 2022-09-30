// Tools
import RWD from "./RWD";
import introAnimations from "./introAnimations";
import { styled } from "@mui/system";
import { mergeObjects } from "@/utils/client/mergeSXObjects";
// Styled components
import MinigameStage from "@/components/pages/landing_page/IntroductionScreen/MinigameStages/_MinigameStage";

export default styled(MinigameStage)(({ theme }) => ({
    ...(mergeObjects(RWD, introAnimations) as any),
}));
