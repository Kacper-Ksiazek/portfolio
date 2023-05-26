// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Check from "@mui/icons-material/Check";
// Styled components
import { IconWrapper, StyledCheckboxWrapper } from "./styled_components";

interface StyledCheckboxProps {
    label: string;
    value: boolean;
    updateValue: (val: boolean) => void;

    small?: boolean;
}

const StyledCheckbox: FunctionComponent<StyledCheckboxProps> = (props) => {
    const size = props.small ? "32px" : "42px";

    return (
        <StyledCheckboxWrapper
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

            <span>{props.label}</span>
        </StyledCheckboxWrapper>
    );
};

export default StyledCheckbox;
