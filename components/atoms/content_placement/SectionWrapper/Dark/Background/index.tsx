// Tools
import { fadeSimple } from "@/components/keyframes/intro";
// Types
import type { Direction } from "./Base";
import type { FunctionComponent } from "react";
// Other components
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled Components
import DarkSectionWrapperBackgroundSVGBase from "./Base";

const DarkSectionBackground: FunctionComponent<{ direction: Direction }> = (props) => {
    const BACKGROUND: CSSClassName = "dark-wrapper-background";

    return (
        <TransformWhenVisible
            to={{
                [`.${BACKGROUND}`]: {
                    animation: `${fadeSimple} 2s 2s both linear`,
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
