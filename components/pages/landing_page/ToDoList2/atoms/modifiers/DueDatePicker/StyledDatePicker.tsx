// Tools
import { styled } from "@mui/material";
// Other components
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function shouldForwardProp(prop: string) {
    return !["size"].includes(prop);
}

export default styled(DatePicker, { shouldForwardProp })<{ size: `${string}px` }>(({ theme, ...props }) => ({
    height: props.size,
    ".MuiOutlinedInput-root": {
        display: "flex",
        flexDirection: "row-reverse",
        paddingRight: "36px",
        ".MuiIconButton-edgeEnd": {
            marginRight: "-16px",
            transform: "translateX(-4px)",
        },
    },
    ".MuiSelect-select": {
        fontSize: "16px",
        paddingBottom: "6px !important",
        paddingTop: "6px !important",
    },
    ".MuiInputBase-input": {
        width: "112px",
        height: props.size,
        paddingTop: "0px",
        paddingBottom: "0px",
        fontSize: "14px !important",
    },
    input: {
        paddingLeft: "16px",
    },
    svg: {
        fontSize: "20px",
    },
}));
