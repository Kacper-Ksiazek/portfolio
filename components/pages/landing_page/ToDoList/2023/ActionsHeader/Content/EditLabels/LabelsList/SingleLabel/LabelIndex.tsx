// Tools
import { alpha, styled } from "@mui/material";
// Types
import type { FunctionComponent, HTMLAttributes } from "react";
// Styled components
const LabelIndexBase = styled("span")(({ theme }) => ({
    ...theme.mixins.flex_center,
    position: "relative",
    padding: "0 !important",
    width: "60px",
    userSelect: "none",

    "&::after": {
        content: "''",
        ...theme.mixins.absolute_center,
        background: theme.palette.mode == "light" ? alpha(theme.palette.background.MUIFormElementsBorder, 0.3) : theme.palette.background.MUIFormElementsBorder,
        width: "calc(100% - 16px)",
        height: "calc(100% - 16px)",
        borderRadius: "3px",
    },

    "span.content": {
        position: "relative",
        zIndex: 2,
    },
}));
interface LabelIndexProps extends HTMLAttributes<HTMLSpanElement> {
    index: number;
}

const LabelIndex: FunctionComponent<LabelIndexProps> = (props) => {
    const { index, ...propsToForward } = props;
    return (
        <LabelIndexBase {...propsToForward}>
            <span className="content">
                {props.index}
                {/*  */}
            </span>
        </LabelIndexBase>
    );
};

export default LabelIndex;
