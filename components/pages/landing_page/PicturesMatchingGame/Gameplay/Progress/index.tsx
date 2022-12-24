// Tools
import { usePicturesMatchingGameContext } from "@/components/pages/landing_page/PicturesMatchingGame/hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Clock from "./Clock";
// Styled components
import { ProgressWrapper } from "./styled_components";

const Progress: FunctionComponent = () => {
    const context = usePicturesMatchingGameContext();

    return (
        <ProgressWrapper id="pictures-matching-progress-wrapper">
            <Clock gameplay={context.gameplay} incrementTime={context.methods.incrementTime} />
        </ProgressWrapper>
    );
};

export default Progress;
