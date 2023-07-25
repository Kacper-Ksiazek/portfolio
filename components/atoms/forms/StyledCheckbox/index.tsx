// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
import type { ComponentThemeName } from "../_common_component_color_themes";
// Material UI Components
import Check from "@mui/icons-material/Check";
// Styled components
import { IconWrapper } from "./IconWrapper";
import { StyledCheckboxBase } from "./StyledCheckboxBase";

interface StyledCheckboxProps {
    label: string;
    value: boolean;
    updateValue: (val: boolean) => void;

    id?: string;
    small?: boolean;
    disabled?: boolean;
    className?: string;
    componentThemeID?: ComponentThemeName;
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
        <StyledCheckboxBase
            sx={{ height: size }} //
            onClick={onClick}
            onBlur={onBlur}
            recentlyClicked={recentlyClicked}
            disabled={Boolean(props.disabled)}
            tabIndex={props.disabled ? -1 : 0}
            className={props.className}
            id={props.id}
            componentThemeID={props.componentThemeID}
        >
            <IconWrapper
                size={props.small ? "small" : "normal"} //
                className={`${props.value ? "selected" : ""} icon-wrapper`}
            >
                <Check />
            </IconWrapper>

            <span>{props.label}</span>
        </StyledCheckboxBase>
    );
};

export default StyledCheckbox;
