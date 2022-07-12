// Types
import type { FunctionComponent } from "react";
// Material UI Components
import CircularProgress from "@mui/material/CircularProgress";
// Styled components
import { BottomInformation, ProcessRequestStageWrapper } from "./_styled_components";

interface PendingProps {
    outroAnimation: boolean;
}

const Pending: FunctionComponent<PendingProps> = (props) => {
    return (
        <ProcessRequestStageWrapper className={props.outroAnimation ? "outro" : ""}>
            <CircularProgress />
            <BottomInformation>Your request is processing</BottomInformation>
        </ProcessRequestStageWrapper>
    );
};

export default Pending;
