// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Check from "@mui/icons-material/Check";
// Styled components
import { IconWrapper, UrgencySwitchWrapper } from "./styled_components";

interface UrgencySwitchProps {
    value: boolean;
    updateValue: (val: boolean) => void;

    small?: boolean;
}

const UrgencySwitch: FunctionComponent<UrgencySwitchProps> = (props) => {
    const size = props.small ? "32px" : "42px";

    return (
        <UrgencySwitchWrapper
            sx={{ height: size }} //
            tabIndex={0}
            role="button"
            onClick={() => props.updateValue(!props.value)}
        >
            <IconWrapper
                size={props.small ? "small" : "normal"} //
                className={`${props.value ? "selected" : ""} icon-wrapper`}
            >
                <Check />
            </IconWrapper>

            <span>Urgent</span>
        </UrgencySwitchWrapper>
    );
};

export default UrgencySwitch;
