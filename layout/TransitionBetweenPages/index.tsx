// Tools
import { useControlsReducer, useAddRouterEvents, useHandleNewPageOpening } from "./hooks";
// Types
import type { FunctionComponent } from "react";
// Styled Components
import { RectangleOne, RectangleTwo } from "./Rectangles";

const TransitionBetweenPages: FunctionComponent = () => {
    const [controls, updateControls] = useControlsReducer();

    useAddRouterEvents(updateControls);
    useHandleNewPageOpening(controls, updateControls);

    const rectangleClassName: CSSClassName = controls.displayOutroAnimation ? "outro" : "";

    if (controls.renderElements) {
        return (
            <>
                <RectangleOne className={rectangleClassName} />
                <RectangleTwo className={rectangleClassName}>
                    <span>Loading...</span>
                </RectangleTwo>
            </>
        );
    }
    return <></>;
};

export default TransitionBetweenPages;
