// Tools
import dayjs from "dayjs";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// Styled components
import StyledDatePicker from "./StyledDatePicker";
import ClearButton from "./ClearButton";

export const DUE_DATE_PICKER_CLASS_NAME: CSSClassName = "due-date-picker";

const DATE_FORMAT = "DD/MM/YYYY";

interface DueDatePickerProps {
    value: string | null;
    updateValue: (val: string | null) => void;
    small?: boolean;
}

const DueDatePicker: FunctionComponent<DueDatePickerProps> = (props) => {
    const size = props.small ? "32px" : "42px";

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ position: "relative" }} className={DUE_DATE_PICKER_CLASS_NAME}>
                <StyledDatePicker
                    size={size}
                    value={props.value ? dayjs(props.value, DATE_FORMAT) : null}
                    onChange={(newValue) => {
                        props.updateValue(dayjs(newValue as any).format(DATE_FORMAT));
                    }}
                    disablePast
                    format={DATE_FORMAT}
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
