// Types
import type { FunctionComponent } from "react";
// Styled components
import { SingleBar, SingleBarWrapper } from "../styled_components";

const ThereAreNoRatios: FunctionComponent = () => {
    return (
        <SingleBarWrapper>
            <SingleBar completion="0%" color="#333" />
        </SingleBarWrapper>
    );
};

export default ThereAreNoRatios;
