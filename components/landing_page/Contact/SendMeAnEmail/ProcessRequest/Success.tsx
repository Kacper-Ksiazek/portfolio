// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Check from "@mui/icons-material/Check";
// Styled components
import { BottomInformation, ProcessRequestStageWrapper } from "./_styled_components";

const Pending: FunctionComponent = (props) => {
    return (
        <ProcessRequestStageWrapper className="success">
            <Check className="main-icon" />
            <BottomInformation>
                Your message has been send <strong>successfully</strong>.
            </BottomInformation>
        </ProcessRequestStageWrapper>
    );
};

export default Pending;
