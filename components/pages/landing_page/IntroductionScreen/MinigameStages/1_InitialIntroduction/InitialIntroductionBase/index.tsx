// Tools
import RWD from "./RWD";
import introAnimations from "./introAnimations";
import { styled } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";
// Styled components
import MinigameStage from "@/components/pages/landing_page/IntroductionScreen/MinigameStages/_MinigameStage";

const mergeObjects = (...objectToMerge: SxProps[]): Record<any, any> => {
    const result: Record<any, any> = {};

    objectToMerge.forEach((singleObject) => {
        Object.entries(singleObject as any).forEach(([key, val]) => {
            if (result.hasOwnProperty(key)) {
                result[key] = {
                    ...result[key],
                    ...(val as any),
                };
            } else {
                result[key] = val;
            }
        });
    });

    return result;
};

export default styled(MinigameStage)(({ theme }) => ({
    ...(mergeObjects(RWD, introAnimations) as any),
}));
