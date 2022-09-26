// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import ChevronRight from "@mui/icons-material/ChevronRight";
// Styled components
import StageBase from "./StageBase";

interface StartProcessingProps {
    displayWhen: boolean;
    onClick: () => void;
}

const StartProcessing: FunctionComponent<StartProcessingProps> = (props) => {
    return (
        <StageBase onClick={props.onClick} displayWhen={props.displayWhen}>
            <span>Collect your reward</span>
            <ChevronRight />
        </StageBase>
    );
};

export default StartProcessing;
