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
    value: string | null;
    updateValue: (val: string | null) => void;
    small?: boolean;
}

const DueDatePicker: FunctionComponent<DueDatePickerProps> = (props) => {
    const size = props.small ? "32px" : "40px";

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={props.value ? dayjs(props.value, DATE_FORMAT) : null}
                onChange={(newValue) => {
                    props.updateValue(dayjs(newValue as any).format(DATE_FORMAT));
                }}
                disablePast
                className="due-date-picker"
                sx={{
                    height: size,
                    ".MuiSelect-select": {
                        fontSize: "16px",
                        paddingBottom: "6px !important",
                        paddingTop: "6px !important",
                    },
                    ".MuiInputBase-input": {
                        width: "112px",
                        height: size,
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        fontSize: "14px !important",
                    },
                    svg: {
                        fontSize: "20px",
                    },
                }}
            />

            <Fade in={props.value !== null}>
                <StyledButton
                    iconButton
                    sx={{
                        background: alpha("#000", 0.2),
                        borderColor: alpha("#fff", 0.2),
                        width: size,
                        height: size,
                        marginLeft: props.small ? "4px" : "8px",
                    }}
                    onClick={() => props.updateValue(null)}
                >
                    <CloseRounded sx={{ fontSize: "20px" }} />
                </StyledButton>
            </Fade>
        </LocalizationProvider>
    );
};

export default DueDatePicker;
