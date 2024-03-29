// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Check from "@mui/icons-material/Check";
import Refresh from "@mui/icons-material/Refresh";
import ArrowBack from "@mui/icons-material/ArrowBack";
// Other components
import ButtonWithTooltip from "@/components/atoms/forms/ButtonWithTooltip";
// Styled components
import { BottomInformation, ProcessRequestStageWrapper, AbsoluteButtonsWrapper } from "./_styled_components";

interface SuccessProps {
    hasBeenAlreadySent: boolean;
}

interface FakedSuccessProps {
    isStaged: boolean;
    hasBeenAlreadySent: boolean;
    outroAnimation: boolean;
    refresh: () => void;
    goBackToTheForm: () => void;
}

const SuccessResult: FunctionComponent<SuccessProps | FakedSuccessProps> = (props) => {
    function isStaged(props: any): props is FakedSuccessProps {
        return Object(props).hasOwnProperty("isStaged");
    }

    return (
        <ProcessRequestStageWrapper
            className={[
                "success", //
                (props as any).outroAnimation ? "outro" : "",
            ].join(" ")}
        >
            {isStaged(props) && props.isStaged && (
                <AbsoluteButtonsWrapper>
                    <ButtonWithTooltip
                        icon={<Refresh />} //
                        onClick={props.refresh}
                        componentThemeID="SUCCESS"
                        tooltip="Send request again"
                    />
                    <ButtonWithTooltip
                        icon={<ArrowBack />} //
                        componentThemeID="SUCCESS"
                        tooltip="Return to the form"
                        onClick={props.goBackToTheForm}
                    />
                </AbsoluteButtonsWrapper>
            )}

            <Check className="main-icon" />
            <BottomInformation>
                Your message has been {props.hasBeenAlreadySent ? <strong>ALREADY</strong> : <></>} sent <strong>successfully</strong>.
            </BottomInformation>
        </ProcessRequestStageWrapper>
    );
};

export default SuccessResult;
