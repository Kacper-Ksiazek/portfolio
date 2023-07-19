// Tools
import { forwardRef } from "react";
import { CSS_REFERENCES } from "./css_references";
// Types
import type { ReactNode } from "react";
import type { SxProps } from "@mui/material";
// Styled components
import ScrollBarHidder from "./ScrollBarHidder";
import { OverflowScrollDivWrapper } from "./Wrapper";

interface OverflowScrollDivProps {
    children: ReactNode;
    maxHeight?: string;
    sx?: SxProps;
    id?: string;
    mimimumViewportWidthToKeepScrollability?: `${number}px`;
    /** Keep scrollbar hidden for a fixed period of time, expressed in **ms** */
    displayScrollBarAfterTimeout?: number;
    /** Change the default `#FFFFFF` color of the scrollbar's hidder bar */
    scrollbarHidderColor?: string;
}

const OverflowScrollDiv = forwardRef<HTMLDivElement, OverflowScrollDivProps>((props, ref) => {
    if (!props.id && !props.maxHeight) {
        throw new Error(
            "`OverflowScrollDiv` component has to have its height fixed either by passing it in `maxHeight` prop or by adding particular component unique id and then specyfing height more flexibly (in order to achive responsibility for instance) in another place able to add styles"
        );
    }
    return (
        <OverflowScrollDivWrapper
            sx={props.sx} //
            id={props.id}
            ref={ref as any}
            maxHeightWhileScrollable={props.maxHeight as string}
            scrollabilityThreshold={props.mimimumViewportWidthToKeepScrollability}
            className={CSS_REFERENCES.GENERAL_WRAPPER}
        >
            <div className={CSS_REFERENCES.CONTENT_WRAPPER}>{props.children}</div>

            {props.displayScrollBarAfterTimeout && (
                <ScrollBarHidder
                    alternativeBackground={props.scrollbarHidderColor} //
                    introAnimationDelay={props.displayScrollBarAfterTimeout}
                />
            )}
        </OverflowScrollDivWrapper>
    );
});
OverflowScrollDiv.defaultProps = {
    mimimumViewportWidthToKeepScrollability: "1001px",
    maxHeight: "auto",
};

OverflowScrollDiv.displayName = "OverflowScrollDiv";
export default OverflowScrollDiv;
