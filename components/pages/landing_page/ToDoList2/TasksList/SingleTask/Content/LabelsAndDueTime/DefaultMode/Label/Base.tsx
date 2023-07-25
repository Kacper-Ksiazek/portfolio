// Tools
import { styled } from "@mui/material";
// Styled components
import LabelBase from "landing_page/ToDoList2/atoms/LabelBase";

export default styled(LabelBase)(({ theme }) => ({
    "&.urgency": {
        marginRight: "0px",
        width: 0,
        padding: "2px 0",
        transform: "scaleX(0)",
        transformOrigin: "left",
        borderColor: "transparent",
        background: theme.palette.primary.main,
        overflow: "hidden",
        span: {
            opacity: 0,
            transition: "opacity .3s",
        },
        "&:not(&.active)": {
            border: "0px solid !important",
        },
        "&.active": {
            border: "2px solid",
            borderColor: theme.palette.primary.main,
            transform: "scaleX(1)",
            width: "auto",
            marginRight: "8px",
            padding: "2px 6px",
            transition: "all .3s",
            span: {
                opacity: 1,
                transition: "opacity .3s .3s",
            },
        },
    },
}));
