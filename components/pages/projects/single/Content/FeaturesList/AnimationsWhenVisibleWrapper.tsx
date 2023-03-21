// Tools
import { repeat } from "@/utils/client/styled/repeat";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";

interface AnimationsWhenVisibleWrapperProps {
    children: ReactNode;
}

const AnimationsWhenVisibleWrapper: FunctionComponent<AnimationsWhenVisibleWrapperProps> = (props) => {
    const DELAY_BETWEEN_ELEMENTS: number = 0.1;

    return (
        <TransformWhenVisible
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            from={{ opacity: 0 }}
            to={(theme) => ({
                opacity: 1,
                "#features-display-toggler": {
                    animation: `${fadeSimple} .3s 1.4s both`,
                },
                ".single-feature": {
                    [`&:nth-of-type(-n+5)::after`]: {
                        content: "''",
                        ...theme.mixins.absolute_full,
                        background: theme.palette.background.lightAnimationBar,
                        zIndex: 3,
                    },
                    //
                    ...repeat(5, (index) => ({
                        [`&:nth-of-type(${index + 1})`]: {
                            "&::after": {
                                animation: `${fadeSimpleOUT} .5s ${0.8 + index * DELAY_BETWEEN_ELEMENTS}s both linear`,
                            },
                            animation: [
                                `${fadeSimple} .3s ${0.2 + index * DELAY_BETWEEN_ELEMENTS}s both linear`, //
                            ].join(", "),
                        },
                    })),
                },
            })}
        >
            {props.children}
            {/*  */}
        </TransformWhenVisible>
    );
};

export default AnimationsWhenVisibleWrapper;
