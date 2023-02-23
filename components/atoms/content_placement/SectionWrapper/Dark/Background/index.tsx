// Tools
import { fadeSimple } from "@/components/keyframes/intro";
// Types
export type { Direction } from "./Base";
import type { FunctionComponent } from "react";
// Other components
import RenderOnScroll from "@/components/utils/RenderOnScroll";
// Styled Components
import DarkSectionWrapperBackgroundSVGBase from "./Base";

const DarkSectionBackground: FunctionComponent<{ direction: Direction }> = (props) => {
    const BACKGROUND: CSSClassName = "dark-wrapper-background";

    return (
        <RenderOnScroll
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
        </RenderOnScroll>
    );
};

export default DarkSectionBackground;
