// Tools
import { useRef } from "react";
import ClearButton from "../_ClearButton";
// Types
import type { FunctionComponent } from "react";
import type { ComponentThemeName } from "../_common_component_color_themes";
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
    className?: string;
    small?: boolean;
    disabled?: boolean;
    componentThemeID?: ComponentThemeName;
}

const StyledDatePicker: FunctionComponent<StyledDatePickerProps> = (props) => {
    const timeInputRef = useRef<HTMLInputElement>(null);

    function open() {
        if (timeInputRef.current) timeInputRef.current.showPicker();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            style={{
                position: "relative", //
                height: props.small ? "32px" : "42px",
                minWidth: "148px",
            }}
        >
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
                small={props.small}
            >
                <div className="icon-wrapper">
                    <AccessTimeRoundedIcon />
                </div>

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
