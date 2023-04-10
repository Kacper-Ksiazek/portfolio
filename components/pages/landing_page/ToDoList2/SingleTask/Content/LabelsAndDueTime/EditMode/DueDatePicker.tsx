// Tools
import dayjs from "dayjs";
import { Fade, alpha } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Other components
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import StyledButton from "@/components/atoms/forms/StyledButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// Material UI Icons
import CloseRounded from "@mui/icons-material/CloseRounded";
const DATE_FORMAT = "DD/MM/YYYY";

interface DueDatePickerProps {
    newValue: string | null;
    updateNewValue: (val: string | null) => void;
}

const DueDatePicker: FunctionComponent<DueDatePickerProps> = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={props.newValue ? dayjs(props.newValue, DATE_FORMAT) : null}
                onChange={(newValue) => {
                    props.updateNewValue(dayjs(newValue as any).format(DATE_FORMAT));
                }}
                disablePast
                className="due-date-picker"
            />

            <Fade in={props.newValue !== null}>
                <StyledButton
                    iconButton
                    sx={{
                        background: alpha("#000", 0.2),
                        borderColor: alpha("#fff", 0.2),
                    }}
                    onClick={() => props.updateNewValue(null)}
                >
                    <CloseRounded sx={{ fontSize: "20px" }} />
                </StyledButton>
            </Fade>
        </LocalizationProvider>
    );
};

export default DueDatePicker;
