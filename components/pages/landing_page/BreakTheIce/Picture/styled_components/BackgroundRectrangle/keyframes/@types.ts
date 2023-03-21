// Tools
import { keyframes } from "@mui/material";
import { IDS } from "../../css_references";

export type ID = keyof typeof IDS;

type Animation = ReturnType<typeof keyframes>;

type RectrangleSize = "8px" | "10px" | "15px";

type AnimationName = `_${RectrangleSize}`;

export interface AnimationsOrganizer {
    intro: Record<AnimationName, Animation>;
    outro: Record<AnimationName, Animation>;
}
