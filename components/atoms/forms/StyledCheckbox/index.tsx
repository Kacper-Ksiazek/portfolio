// Tools
import { useState } from "react";
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";
// Types
import type { SxProps } from "@/@types/MUI";
import type { FunctionComponent } from "react";
import type { ComponentThemeName } from "../_common_component_color_themes";
// Material UI Components
import Check from "@mui/icons-material/Check";
import Close from "@mui/icons-material/Close";
// Styled components
import { IconWrapper } from "./IconWrapper";
import { StyledCheckboxBase } from "./StyledCheckboxBase";

interface StyledCheckboxProps {
    label: string;
    value: boolean;
    updateValue: (val: boolean) => void;

    id?: string;
    sx?: SxProps;
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
            sx={{ height: size, ...props.sx }} //
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
                <SmoothConditionalRender when={props.disabled !== true}>
                    <Check />
                </SmoothConditionalRender>

                <SmoothConditionalRender when={props.disabled === true}>
                    <Close />
                </SmoothConditionalRender>
            </IconWrapper>

            <span>{props.label}</span>
        </StyledCheckboxBase>
    );
};

export default StyledCheckbox;
