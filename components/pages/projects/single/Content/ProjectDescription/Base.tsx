// Tools
import { repeat } from "@/utils/client/styled/repeat";
import { scaleToLeft } from "@/components/keyframes/outro";
import { scaleFromLeft } from "@/components/keyframes/intro";
// Types
import type { Styles } from "@/@types/MUI";
import { fadeSimple } from "@/components/keyframes/intro";
import type { FunctionComponent, ReactNode } from "react";
// Other components
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";

interface ProjectDescriptionBaseProps {
    children: ReactNode;
}

const ProjectDescriptionBase: FunctionComponent<ProjectDescriptionBaseProps> = (props) => {
    return (
        <TransformWhenVisible
            to={(theme) => ({
                "div.paragraph-wrapper": {
                    position: "relative",
                    "h3,p": {
                        position: "relative",
                        zIndex: 2,
                    },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        zIndex: 3,
                        ...theme.mixins.absolute_full,
                        background: theme.palette.background.lightAnimationBar,
                    },

                    ...((): Styles => {
                        const DELAY_BETWEEN_PARAGRAPHS: number = 0.1;
                        const FIRST_ELEMENT_INTRO_DELAY: number = 0.2;
                        const FIRST_ELEMENT_OUTRO_DELAY: number = 0.8;

                        return repeat(4, (index) => {
                            const _delay: number = index * DELAY_BETWEEN_PARAGRAPHS;

                            const introDelay: number = FIRST_ELEMENT_INTRO_DELAY + _delay;
                            const outroDelay: number = FIRST_ELEMENT_OUTRO_DELAY + _delay;

                            return {
                                [`&:nth-of-type(${index + 1})`]: {
                                    "h3, p": {
                                        animation: `${fadeSimple} .001s ${outroDelay}s both`,
                                    },
                                    "&::before": {
                                        animation: [
                                            `${scaleFromLeft} .3s ${introDelay}s both linear`, //
                                            `${scaleToLeft} .3s ${outroDelay}s forwards linear`,
                                        ].join(", "),
                                    },
                                },
                            };
                        });
                    })(),
                },
            })}
        >
            {props.children}
        </TransformWhenVisible>
    );
};

export default ProjectDescriptionBase;
