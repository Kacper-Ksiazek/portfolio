// Tools
import { usePicturesMatchingGameContext } from "./hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SmoothlyAppearingSection from "./SmoothlyAppearingSection";

const Summary: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

    return (
        <SmoothlyAppearingSection>
            <h1>Summary</h1>

            <button onClick={context.navigation.closeSummary}>Exit</button>
        </SmoothlyAppearingSection>
    );
};

export default Summary;
