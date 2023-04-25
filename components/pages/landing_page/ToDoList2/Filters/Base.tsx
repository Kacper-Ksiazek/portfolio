// Tools
import { styled } from "@mui/material";
// Styled components
import SectionWrapper from "../atoms/SectionWrapper";

export default styled(SectionWrapper)(({ theme }) => ({
    ".MuiOutlinedInput-root": {
        "&:not(&:nth-of-type(1))": {
            marginLeft: "12px",
        },
        paddingLeft: "12px",
        "&.filter-select-label": {
            flexGrow: 1,
        },
        "&.filter-select-urgency": {
            width: "176px",
        },
        "&.filter-select-sort": {
            width: "144px",
        },
        "&.filter-select-completion": {
            width: "172px",
        },
        ".MuiSelect-select": {
            paddingLeft: "8px",
        },
    },
}));
