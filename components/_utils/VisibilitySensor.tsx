// Tools
import { styled } from "@mui/system";
import { useState, useEffect, useRef } from "react";
// Types
import type { SxProps } from "@mui/system";
import type { FunctionComponent, ReactNode } from "react";
// Other components
import VisibilitySensorBase from "react-visibility-sensor";
// Styled components
const ChildrenWrapper = styled("div")(({ theme }) => ({
    //
}));

interface VisibilitySensorProps {
    children: ReactNode;
    offsetTop?: number;
    offsetBottom?: number;
    childWrapperSx?: SxProps;

    dontRenderNotVisableChildren?: boolean;
    /**Period of the time expressed in **milliseconds** */
    removeVisibleCSSClassIn?: number;
}

const VisibilitySensor: FunctionComponent<VisibilitySensorProps> = (props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [scrollDuringLatestChange, setScrollDuringLatestChange] = useState<number>(0);
    const wrapperElement = useRef<HTMLElement | null>(null);

    const changeVisibility = (visibility: boolean) => {
        if (isVisible) return;

        const currentScroll = window.scrollY;
        if (scrollDuringLatestChange === currentScroll) return;
        setIsVisible(visibility);
        setScrollDuringLatestChange(currentScroll);
    };

    useEffect(() => {
        if (wrapperElement.current?.firstChild) {
            if (isVisible) {
                (wrapperElement.current.firstChild as any).classList.add("visible");
                (wrapperElement.current.firstChild as any).classList.remove("not-visable");
                if (props.removeVisibleCSSClassIn) {
                    setTimeout(() => {
                        if (wrapperElement.current) {
                            (wrapperElement.current.firstChild as any).classList.remove("visible");
                        }
                    }, props.removeVisibleCSSClassIn);
                }
            }
            //
            else {
                (wrapperElement.current.firstChild as any).classList.remove("visible");
                (wrapperElement.current.firstChild as any).classList.add("not-visable");
            }
        }
    }, [isVisible, props.removeVisibleCSSClassIn]);

    return (
        <VisibilitySensorBase
            onChange={changeVisibility} //
            offset={{
                top: props.offsetTop ?? 300,
                bottom: props.offsetBottom ?? 300,
            }}
            partialVisibility={true}
            intervalDelay={200}
        >
            <ChildrenWrapper ref={wrapperElement as any} sx={props.childWrapperSx}>
                {(() => {
                    if (props.dontRenderNotVisableChildren && isVisible === false) return null;
                    return props.children;
                })()}
            </ChildrenWrapper>
        </VisibilitySensorBase>
    );
};

export default VisibilitySensor;
