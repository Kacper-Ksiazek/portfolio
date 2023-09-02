// Tools
import { styled } from "@mui/material";
import { VIEW_MODE_CSS_REFERENCES } from "@/components/pages/landing_page/ToDoList2/TasksList/SingleTask/css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";

import { default as _LabelBase , type LabelBaseProps} from "landing_page/ToDoList2/atoms/LabelBase";

const LabelBaseWithUrgentStyles = styled(_LabelBase)(({ theme }) => ({
    "&.urgency": {
        marginRight: "0px !important",
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
            padding: "2px 6px",
            transition: "all .3s",
            span: {
                opacity: 1,
                transition: "opacity .3s .3s",
            },
        },
    },
}));

const StyledLabelBase: FunctionComponent<{ children: ReactNode } & LabelBaseProps> = ({children, ...props}) => {

    
    return (
        <span className={VIEW_MODE_CSS_REFERENCES.LABEL}>
            <LabelBaseWithUrgentStyles {...props}>{children}</LabelBaseWithUrgentStyles>
        </span>
    );
};

export default StyledLabelBase;
