// Tools
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import CircularProgress from "@mui/material/CircularProgress";
// Other components
const FeignedPartOnly = dynamic(() => import("./FeignedPartOnly"));
// Styled components
import { BottomInformation, ProcessRequestStageWrapper } from "../_styled_components";

interface PendingProps {
    outroAnimation: boolean;
    isStaged: boolean;
}

const Pending: FunctionComponent<PendingProps> = (props) => {
    return (
        <ProcessRequestStageWrapper
            className={props.outroAnimation ? "outro" : ""} //
            sx={props.isStaged ? { pt: "16px" } : {}}
        >
            <CircularProgress />
            <BottomInformation>Your request is processing</BottomInformation>
            {props.isStaged && <FeignedPartOnly />}
        </ProcessRequestStageWrapper>
    );
};

export default Pending;
