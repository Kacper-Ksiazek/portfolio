// Tools
import { useRef } from "react";
import ClearButton from "../_ClearButton";
// Types
import type { FunctionComponent } from "react";
import type { ComponentThemeName } from "../_common_component_color_themes";
// Material UI Components
import IconButton from "@mui/material/IconButton";
// Material UI Icons
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
// Styled components
import StyledTimePickerBase from "./Base";
import OptionalPropertIndicator from "../OptionalPropertyIndicator";

export const TIME_PICKER_CLASS_NAME: CSSClassName = "time-picker";

interface StyledDatePickerProps {
    value: string | null;

    updateValue: (val: string | null) => void;

    id?: string;
    disabled?: boolean;
    componentThemeID?: ComponentThemeName;
}

const StyledDatePicker: FunctionComponent<StyledDatePickerProps> = (props) => {
    const timeInputRef = useRef<HTMLInputElement>(null);

    function open() {
        console.log(timeInputRef.current);
        if (timeInputRef.current) timeInputRef.current.showPicker();
    }

    return (
        <div id={props.id} style={{ position: "relative", height: "42px", minWidth: "148px" }}>
            <OptionalPropertIndicator />

            <input
                type="time" //
                style={{ visibility: "hidden" }}
                ref={timeInputRef}
                onChange={(e) => props.updateValue(e.target.value)}
                value={props.value ?? undefined}
            />

            <StyledTimePickerBase
                onClick={open} //
                disabled={props.disabled}
                componentThemeID={props.componentThemeID}
            >
                <IconButton disabled={props.disabled}>
                    <AccessTimeRoundedIcon />
                </IconButton>

                <span className={`value ${props.value === null ? "empty" : ""}`}>{props.value ?? "00:00"}</span>
            </StyledTimePickerBase>

            <ClearButton
                disabled={props.value === null} //
                clear={() => props.updateValue(null)}
            />
        </div>
    );
};

export default StyledDatePicker;
