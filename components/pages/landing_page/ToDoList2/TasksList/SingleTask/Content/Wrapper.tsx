// Tools
import { styled } from "@mui/material";
import { SELECTORS } from "../css_references";
// Styled components
interface SingleTaskContentWrapperProps {
    editModeIsOpened: boolean;
}

function shouldForwardProp(prop: string): boolean {
    return !["editModeIsOpened"].includes(prop);
}

export default styled("div", { shouldForwardProp })<SingleTaskContentWrapperProps>(({ theme, ...props }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    minHeight: "70px",
    marginRight: props.editModeIsOpened ? "64px" : "16px",
    gap: "6px",
    ".flex-wrapper": {
        gap: "6px",
    },

    [SELECTORS.VIEW_MODE.ANIMATION_ELEMENT]: {
        position: "relative",
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
    },
}));
