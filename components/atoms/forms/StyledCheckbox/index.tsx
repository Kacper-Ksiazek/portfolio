// Tools
import { useState } from "react";
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
    disabled?: boolean;
}

const StyledCheckbox: FunctionComponent<StyledCheckboxProps> = (props) => {
    const size = props.small ? "32px" : "42px";

    const [recentlyClicked, setRecentlyClicked] = useState<boolean>(false);

    function onClick() {
        if (props.disabled) return;

        setRecentlyClicked(true);
        props.updateValue(!props.value);
    }

    function onBlur() {
        setRecentlyClicked(false);
    }

    return (
        <StyledCheckboxWrapper
            sx={{ height: size }} //
            role="button"
            onClick={onClick}
            onBlur={onBlur}
            recentlyClicked={recentlyClicked}
            disabled={Boolean(props.disabled)}
            tabIndex={props.disabled ? -1 : 0}
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
