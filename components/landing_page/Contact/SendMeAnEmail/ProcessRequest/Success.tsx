// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Check from "@mui/icons-material/Check";
import ArrowBack from "@mui/icons-material/ArrowBack";
// Other components
import ButtonWithTooltip from "../_utils_components/ButtonWIthTooltip";
// Styled components
import { BottomInformation, ProcessRequestStageWrapper } from "./_styled_components";

interface SuccessResultProps {
    isFeigned: boolean;
    isAlreadySucceeded: boolean;
    outroAnimation: boolean;
    goBackToTheForm: () => void;
}

const SuccessResult: FunctionComponent<SuccessResultProps> = (props) => {
    return (
        <ProcessRequestStageWrapper
            className={[
                "success", //
                props.outroAnimation ? "outro" : "",
            ].join(" ")}
        >
            {props.isFeigned && (
                <ButtonWithTooltip
                    color="success" //
                    tooltip="Return to the form"
                    onClick={props.goBackToTheForm}
                    icon={<ArrowBack />}
                    sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                    }}
                />
            )}

            <Check className="main-icon" />
            <BottomInformation>
                Your message has been {props.isAlreadySucceeded ? <strong>ALREADY</strong> : <></>} sent <strong>successfully</strong>.
            </BottomInformation>
        </ProcessRequestStageWrapper>
    );
};

export default SuccessResult;
