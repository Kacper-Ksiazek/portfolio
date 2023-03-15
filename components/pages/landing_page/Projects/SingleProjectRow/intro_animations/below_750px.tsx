// Tools
import { fadeSimple, scale } from "./_keyframes";
import { repeat } from "@/utils/client/styled/repeat";
import { repeatForEachSelector, getAnimationsBasedOnSide } from "./utils";
import { SELECTORS, PROJECT_CARD_ELEMENTS_CONTENTS } from "../_css_references";
// Types
import type { Side } from "./@types";
import type { Styles } from "@/@types/MUI";

function genereateAnimationsForThumbnailBasedOnSide(side: Side): Styles {
    const { thumbnail } = getAnimationsBasedOnSide(side);

    return {
        [`${SELECTORS.THUMBNAIL}::after`]: {
            animation: `${thumbnail.intro} .3s linear both, ${thumbnail.outro} .3s .4s forwards linear`,
        },
    };
}

function generateAnimationsForTextContentBasedOnSide(side: Side): Styles {
    const { content } = getAnimationsBasedOnSide(side);

    return repeatForEachSelector(Object.values(SELECTORS.PROJECT_CARD), (index) => {
        const diff = index * 0.05;
        return {
            "&::after": {
                animation: `${content.intro} .2s ${0.2 + diff}s linear both, ${content.outro} .4s ${0.5 + diff}s forwards linear`,
            },
        };
    });
}

export const introAnimationsForThumbnail: Styles = {
    [SELECTORS.YEAR_DIGIT]: repeat(4, (index) => ({
        [`&:nth-of-type(${index + 1})`]: {
            animation: `${fadeSimple} .2s ${0.9 + index * 0.3}s both linear`,
        },
    })),

    ".project-card": {
        "&::before": {
            animation: `${scale.intro.fromTop} 1s 1.6s both ease-out`,
        },
        // Elements on left side
        "&.even": genereateAnimationsForThumbnailBasedOnSide("left"),
        // Elements on right side
        "&.odd": genereateAnimationsForThumbnailBasedOnSide("right"),

        ".thumbnail-wrapper": {
            ".direct-img-wrapper, .border-shape": {
                animation: `${fadeSimple} .001s .35s both`,
            },
        },
    },
};

export const introAnimationsForTextContent: Styles = {
    ".single-project-text-content-wrapper": {
        "&.even": generateAnimationsForTextContentBasedOnSide("left"),
        "&.odd": generateAnimationsForTextContentBasedOnSide("right"),

        ...repeatForEachSelector(PROJECT_CARD_ELEMENTS_CONTENTS, (index) => ({
            animation: `${fadeSimple} .001s ${0.5 + index * 0.05}s both`,
        })),

        [SELECTORS.PROJECT_CARD.REDIRECTIONS]: {
            a: {
                animation: `${fadeSimple} .3s ${1}s both`,
            },
        },
    },
};
