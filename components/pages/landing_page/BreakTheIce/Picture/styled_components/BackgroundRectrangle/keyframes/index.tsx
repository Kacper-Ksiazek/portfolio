// Tools
import { leftVertical } from "./left_vertical";
import { rightVertical } from "./right_vertical";
import { leftHorizontal } from "./left_horizontal";
import { rightHorizontal } from "./right_horizontal";
// Types
import type { ID, AnimationsOrganizer } from "./@types";

export default {
    LEFT_HORIZONTAL: leftHorizontal,
    LEFT_VERTICAL: leftVertical,
    RIGHT_HORIZONTAL: rightHorizontal,
    RIGHT_VERTICAL: rightVertical,
} as Record<ID, AnimationsOrganizer>;
