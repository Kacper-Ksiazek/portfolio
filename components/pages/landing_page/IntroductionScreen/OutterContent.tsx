// Types
import type { FunctionComponent } from "react";
// Other components
import Technologies from "./Technologies";
import PreviewBackgroundPicture from "./PreviewBackgroundPicture";

interface IntroductionScreenOutterContentProps {
    viewportWidth: number;
}

const IntroductionScreenOutterContent: FunctionComponent<IntroductionScreenOutterContentProps> = (props) => {
    return (
        <>
            {props.viewportWidth > 1150 && <Technologies />}
            <PreviewBackgroundPicture />
        </>
    );
};

export default IntroductionScreenOutterContent;
