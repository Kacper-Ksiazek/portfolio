// Tools
import { keyframes } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
// Types
import type { Direction } from "./Base";
import type { FunctionComponent } from "react";
// Other components
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled Components
import DarkSectionWrapperBackgroundSVGBase from "./Base";

const pulse = keyframes({
    from: {
        opacity: 1,
    },
    to: {
        opacity: 0.8,
    },
});

const DarkSectionBackground: FunctionComponent<{ direction: Direction }> = (props) => {
    const BACKGROUND: CSSClassName = "dark-section-wrapper-background-svg";

    return (
        <TransformWhenVisible
            to={{
                [`.${BACKGROUND}`]: {
                    animation: `${fadeSimple} 2s 2s both linear, ${pulse} .9s 4s infinite linear alternate forwards`,
                },
            }}
            sx={(theme) => theme.mixins.absolute_full}
        >
            <DarkSectionWrapperBackgroundSVGBase
                direction={props.direction} //
                className={BACKGROUND}
            />
        </TransformWhenVisible>
    );
};

export default DarkSectionBackground;
