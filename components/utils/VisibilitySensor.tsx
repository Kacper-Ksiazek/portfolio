// Tools
import { styled } from "@mui/system";
import useWindowSizes from "@/hooks/useWindowSizes";
import { useState, useEffect, useRef } from "react";
// Types
import type { SxProps } from "@mui/system";
import type { FunctionComponent, ReactNode } from "react";
// Other components
import VisibilitySensorBase from "react-visibility-sensor";
// Styled components
const ChildrenWrapper = styled("div")(({ theme }) => ({}));

interface VisibilitySensorProps {
    children: ReactNode;
    offsetTop?: number;
    offsetBottom?: number;
    childWrapperSx?: SxProps;

    dontRenderNotVisableChildren?: boolean;
    /**Period of the time expressed in **milliseconds** */
    removeVisibleCSSClassIn?: number;

    /** In order to avoid displaying simultaneously two akin elements, add the same `observerID` to both of them */
    observerID?: string;
    /** Callback which is to be fired once when the element appears on the screen*/
    onVisible?: () => void;
}

const VisibilitySensor: FunctionComponent<VisibilitySensorProps> = (props) => {
    // This is mainly for timeline purpose
    const DELAY_BETWEEN_SHOWING_IDENTICAL_ELEMENTS: number = 2200;

    const { width } = useWindowSizes();

    const contentHasBeenShownOnce = useRef<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(contentHasBeenShownOnce.current);

    function onVisibilitySensorChange(visibility: boolean) {
        if (isVisible) return;

        if (visibility) {
            if (props.onVisible) props.onVisible();
            if (props.observerID) {
                const propName = `VISIBILITY_SENSOR_TIMEOUT_${props.observerID}`;
                if (window.hasOwnProperty(propName)) {
                    const now = Date.now();
                    (window as any)[propName] = now;

                    setTimeout(() => {
                        setIsVisible(true);
                        if ((window as any)[propName] === now) {
                            delete (window as any)[propName];
                        }
                    }, DELAY_BETWEEN_SHOWING_IDENTICAL_ELEMENTS);
                } else {
                    setIsVisible(true);

                    const now = Date.now();
                    (window as any)[propName] = now;

                    setTimeout(() => {
                        if ((window as any)[propName] === now) {
                            delete (window as any)[propName];
                        }
                    }, DELAY_BETWEEN_SHOWING_IDENTICAL_ELEMENTS);
                }
            } else {
                setIsVisible(true);
            }
        }
    }

    //

    if (width <= 1000) {
        return <ChildrenWrapper sx={props.childWrapperSx}>{props.children}</ChildrenWrapper>;
    }

    return (
        <VisibilitySensorBase
            onChange={onVisibilitySensorChange} //
            offset={{
                top: props.offsetTop ?? 300,
                bottom: props.offsetBottom ?? 300,
            }}
            partialVisibility={true}
            intervalDelay={200}
        >
            <ChildrenWrapper sx={props.childWrapperSx}>
                {(() => {
                    if (props.dontRenderNotVisableChildren && isVisible === false) return null;
                    return props.children;
                })()}
            </ChildrenWrapper>
        </VisibilitySensorBase>
    );
};

export default VisibilitySensor;
