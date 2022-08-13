// Tools
import { handleSinglePair } from "./handleSinglePair";
// Types
import type { SxProps } from "@mui/system";
import type { GenerateCSSProps } from "./@types";

export const generateIconsStyles = (props: GenerateCSSProps): SxProps => {
    return {
        width: `${props.size}px`,
        height: `${props.size}px`,
        //
        // Vue && Prisma
        ...handleSinglePair({
            leftSide: 1,
            rightSide: 8,
            x: props.Vue_and_Prisma.x,
            y: props.Vue_and_Prisma.y,
        }),
        //
        // Git && Next
        ...handleSinglePair({
            leftSide: 2,
            rightSide: 9,
            x: props.Git_and_Next.x,
            y: props.Git_and_Next.y,
        }),
        //
        // React && Python
        ...handleSinglePair({
            leftSide: 3,
            rightSide: 10,
            x: props.React_and_Python.x,
            y: props.React_and_Python.y,
        }),
        //
        // Sass && Jest
        ...handleSinglePair({
            leftSide: 4,
            rightSide: 11,
            x: props.Sass_and_Jest.x,
            y: props.Sass_and_Jest.y,
        }),
        //
        // Material %% Node
        ...handleSinglePair({
            leftSide: 5,
            rightSide: 12,
            x: props.Material_and_Node.x,
            y: props.Material_and_Node.y,
        }),
        //
        // JS %% TS
        ...handleSinglePair({
            leftSide: 6,
            rightSide: 13,
            x: props.JS_and_TS.x,
            y: props.JS_and_TS.y,
        }),
        //
        // HTML && CSS
        ...handleSinglePair({
            leftSide: 7,
            rightSide: 14,
            x: props.HTML_and_CSS.x,
            y: props.HTML_and_CSS.y,
        }),
    };
};
