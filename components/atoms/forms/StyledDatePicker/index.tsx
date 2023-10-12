// Tools
import dayjs from "dayjs";
import { useRef, useEffect } from "react";
// Types
import type { FunctionComponent } from "react";
import type { ComponentThemeName } from "../_common_component_color_themes";
// Material UI Components
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// Styled components
import ClearButton from "../_ClearButton";
import StyledMUIDatePicker from "./StyledMUIDatePicker";
import OptionalPropertyIndicator from "../OptionalPropertyIndicator";

export const DUE_DATE_PICKER_CLASS_NAME: CSSClassName = "due-date-picker";

const DATE_FORMAT = "DD/MM/YYYY";

interface DueDatePickerProps {
    value: string | null;
    updateValue: (val: string | null) => void;

    id?: string;
    small?: boolean;
    disabled?: boolean;
    className?: string;
    componentThemeID?: ComponentThemeName;
}

const DueDatePicker: FunctionComponent<DueDatePickerProps> = (props) => {
    const size = props.small ? "32px" : "42px";

    const inputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const { current: InputElement } = inputRef;
        if (!InputElement) return;

        function onClick() {
            try {
                (wrapperRef.current?.childNodes[0].childNodes[1].childNodes[0] as HTMLButtonElement).click();
            } catch (_: unknown) {
                console.error("Datapicker couldn't have been unfolded");
            }
        }
        InputElement.addEventListener("click", onClick);

        return () => {
            InputElement.removeEventListener("click", onClick);
        };
    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div
                id={props.id} //
                style={{ position: "relative" }}
                className={DUE_DATE_PICKER_CLASS_NAME + " " + props.className}
            >
                <OptionalPropertyIndicator />

                <StyledMUIDatePicker
                    // Styled Component props
                    size={size}
                    disabled={props.disabled}
                    componentThemeID={props.componentThemeID}
                    // MUI Component props
                    disablePast
                    ref={wrapperRef}
                    inputRef={inputRef}
                    format={DATE_FORMAT}
                    value={props.value ? dayjs(props.value, DATE_FORMAT) : null}
                    onChange={(newValue) => {
                        props.updateValue(dayjs(newValue as any).format(DATE_FORMAT));
                    }}
                />

                <ClearButton
                    disabled={props.value === null} //
                    clear={() => props.updateValue(null)}
                />
            </div>
        </LocalizationProvider>
    );
};

export default DueDatePicker;
