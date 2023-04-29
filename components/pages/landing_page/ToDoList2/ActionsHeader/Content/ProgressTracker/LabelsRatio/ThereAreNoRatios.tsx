// Types
import type { FunctionComponent } from "react";
// Styled components
import { ProgressBar, FlexWrapper } from "../styled_components";

const ThereAreNoRatios: FunctionComponent = () => {
    return (
        <FlexWrapper>
            <ProgressBar completion="0%" color="#333" />
        </FlexWrapper>
    );
};

export default ThereAreNoRatios;
