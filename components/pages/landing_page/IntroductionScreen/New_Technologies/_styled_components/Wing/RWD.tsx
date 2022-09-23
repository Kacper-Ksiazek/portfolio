// Tools
import { placeItemsInsideWing } from "./_cssInJsGenerator";
// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (max-height:900px)"]: {
        ".technology": {
            "&:not(&:nth-of-type(1))": {
                marginTop: "64px",
            },
        },
    },
    ["@media (max-height:840px)"]: {
        ...(placeItemsInsideWing({
            contentSidePadding: 320,
            spacingBetweenColumns: 64,
            nearest: 96,
            middle: 64,
            farest: 48,
            technologySize: 90,
        }) as any),
    },
    ["@media (max-height:780px)"]: {
        ...(placeItemsInsideWing({
            contentSidePadding: 330,
            spacingBetweenColumns: 56,
            nearest: 96,
            middle: 56,
            farest: 32,
            technologySize: 84,
        }) as any),
        ".technology": {
            "&:not(&:nth-of-type(1))": {
                marginTop: "56px",
            },
        },
    },
    ["@media (max-width:1450px)"]: {
        ...(placeItemsInsideWing({
            contentSidePadding: 180,
            spacingBetweenColumns: 64,
            nearest: 128,
            middle: 64,
            farest: 48,
            technologySize: 84,
        }) as any),
        ["@media (max-height:700px)"]: {
            ".technology": {
                "&:not(&:nth-of-type(1))": {
                    marginTop: "46px",
                },
            },
        },
        ["@media (max-height:670px)"]: {
            ...(placeItemsInsideWing({
                contentSidePadding: 180,
                spacingBetweenColumns: 64,
                nearest: 112,
                middle: 64,
                farest: 36,
                technologySize: 74,
            }) as any),
        },
    },
} as SxProps;
