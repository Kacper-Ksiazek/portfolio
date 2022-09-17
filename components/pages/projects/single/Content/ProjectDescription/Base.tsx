// Tools
import { styled } from "@mui/system";
import * as ParagraphWrapperAnimations from "./ParagraphWrapper/keyframes";
// Types
import type { SxProps } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components

export default styled("div")(({ theme }) => ({
    // "p, h3": {
    //     visibility: "hidden",
    // },
    "&.visible": {
        "p, h3": {
            visibility: "visible",
        },
    },
    "div.paragraph-wrapper": {
        position: "relative",
        "h3,p": {
            position: "relative",
            zIndex: 2,
        },
        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: theme.palette.background.lightAnimationBar,
            zIndex: 3,
        },
        ...((): SxProps => {
            const AMOUNT_OF_PARAGRAPHS: number = 4;
            // all following properties are expressed in **ms** !
            const DELAY_BETWEEN_PARAGRAPHS: number = 0.1;
            const FIRST_ELEMENT_INTRO_DELAY: number = 0.2;
            const FIRST_ELEMENT_OUTRO_DELAY: number = 0.8;

            const result: SxProps = {};

            for (let index = 0; index < AMOUNT_OF_PARAGRAPHS; index++) {
                const _delay: number = index * DELAY_BETWEEN_PARAGRAPHS;

                const introDelay: number = FIRST_ELEMENT_INTRO_DELAY + _delay;
                const outroDelay: number = FIRST_ELEMENT_OUTRO_DELAY + _delay;

                (result as any)[`&:nth-of-type(${index + 1})`] = {
                    "h3, p": {
                        animation: `${fadeSimple} .001s ${outroDelay}s both`,
                    },
                    "&::before": {
                        animation: [
                            `${ParagraphWrapperAnimations.intro} .3s ${introDelay}s both linear`, //
                            `${ParagraphWrapperAnimations.outro} .3s ${outroDelay}s forwards linear`,
                        ].join(", "),
                    },
                };
            }

            return result;
        })(),
    },
}));
