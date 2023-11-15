// Types
import type { Theme } from "@/@types/MUI";
import type { ForefrontRectangleColor, RectangleStyles } from "../@types";

export function getStylesBasedOnColor(theme: Theme, color: ForefrontRectangleColor): RectangleStyles {
    switch (color) {
        case "BLACK":
            return {
                initialHeight: "100px",
                backgroundColor: "#000000",
                zIndex: 11,
                delays: {
                    intro: 0.6,
                    outro: 0.4,
                },
            };
        case "SECONDARY":
            return {
                initialHeight: "200px",
                backgroundColor: theme.palette.secondary.main,
                zIndex: 9,
                delays: {
                    intro: 0.3,
                    outro: 1,
                },
            };
    }
}
