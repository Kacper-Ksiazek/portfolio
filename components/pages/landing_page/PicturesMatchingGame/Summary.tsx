// Tools
import { usePicturesMatchingGameContext } from "./hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";

const Summary: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

    return (
        <>
            <h1>Summary</h1>

            <button onClick={context.navigation.closeSummary}>Exit</button>
        </>
    );
};

export default Summary;
