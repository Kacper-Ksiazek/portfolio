// Tools
import { scrollWindowDown } from "./utils";
import { CSS_REFERENCES } from "../css_references";
import { useAnimationHasEndedDetector } from "./hooks";
// Types
import type { FunctionComponent } from "react";
// Styled Components
import ScrollButtonBase from "./Base";

interface ScrollButtonProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const ScrollButton: FunctionComponent<ScrollButtonProps> = (props) => {
    const { introAnimationHadEnded } = useAnimationHasEndedDetector();

    function onlyWhenVisible(fn: () => void) {
        if (introAnimationHadEnded) fn();
    }

    return (
        <span id={CSS_REFERENCES.SCROLL_DOWN_BUTTON} style={{ marginTop: "64px" }}>
            <ScrollButtonBase
                onClick={scrollWindowDown} //
                onMouseEnter={() => onlyWhenVisible(props.onMouseEnter)}
                onMouseLeave={() => onlyWhenVisible(props.onMouseLeave)}
            >
                <span className="text">Scroll down</span>
            </ScrollButtonBase>
        </span>
    );
};

export default ScrollButton;
