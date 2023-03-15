// Tools
import * as stage_one from "./stage_one";
import * as stage_two from "./stage_two";
// Types
import type { Animation } from "../../@types";

interface IntroBarsAnimation {
    firstProject: Animation;
    leftSide: Animation;
    rightSide: Animation;
}

export const intro: Required<IntroBarsAnimation> = {
    firstProject: stage_one.stage_one_firstProject,
    leftSide: stage_one.stage_one_leftSide,
    rightSide: stage_one.stage_one_rightSide,
};
export const outro: Required<IntroBarsAnimation> = {
    firstProject: stage_two.stage_two_firstProject,
    leftSide: stage_two.stage_two_leftSide,
    rightSide: stage_two.stage_two_rightSide,
};
