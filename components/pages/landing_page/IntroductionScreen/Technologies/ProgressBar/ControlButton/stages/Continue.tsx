// Types
import type { FunctionComponent } from "react";
// Styled components
import StageBase from "./StageBase";

interface ContinueProps {
    displayWhen: boolean;
    onClick: () => void;
}

const Continue: FunctionComponent<ContinueProps> = (props) => {
    return (
        <StageBase onClick={props.onClick} displayWhen={props.displayWhen}>
            <span>Continue</span>
        </StageBase>
    );
};

export default Continue;
