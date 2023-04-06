// Tools
import { styled } from "@mui/material";
import { CLASSES } from "../../css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";

const DescriptionBase = styled("h4")(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "500",
    cursor: "default",
    userSelect: "none",
    margin: "0 0 6px 0",
    position: "relative",
    transition: "color .3s",
    "&::before": {
        content: "''",
        transform: "scaleX(0)",
        position: "absolute",
        top: "50%",
        width: "100%",
        height: "3px",
        background: theme.palette.primary.main,
        left: 0,
        transition: "transform .3s",
        transformOrigin: "left",
    },
}));

const Description: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return (
        <DescriptionBase className={CLASSES.SINGLE_TASK.DESCRIPTION}>
            <span>{children}</span>
        </DescriptionBase>
    );
};

export default Description;
