// Tools
import { CSS_REFERENCES } from "../../css_references";
// Types
import type { FunctionComponent } from "react";
// Styled components
import SingleAnimationBar from "./SingleAnimationBar";

interface IntroAnimationBarsProps {
    projectIsFirst: boolean;
}

const IntroAnimationBars: FunctionComponent<IntroAnimationBarsProps> = (props) => {
    if (props.projectIsFirst) return <></>;

    return (
        <>
            <SingleAnimationBar className={CSS_REFERENCES.INTRO_BAR_ANIMATIONS.PRIMARY} />
            <SingleAnimationBar className={CSS_REFERENCES.INTRO_BAR_ANIMATIONS.SECONDARY} />
        </>
    );
};

export default IntroAnimationBars;
