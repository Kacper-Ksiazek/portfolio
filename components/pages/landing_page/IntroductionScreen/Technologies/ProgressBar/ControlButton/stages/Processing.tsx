// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CircularProgress from "@mui/material/CircularProgress";
// Styled components
import StageBase from "./StageBase";

interface StartProcessingProps {
    displayWhen: boolean;
}

const StartProcessing: FunctionComponent<StartProcessingProps> = (props) => {
    return (
        <StageBase displayWhen={props.displayWhen}>
            <CircularProgress size="24px" />
        </StageBase>
    );
};

export default StartProcessing;
