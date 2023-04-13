// Tools
import { styled, alpha, keyframes } from "@mui/material";
import { scaleFromBottom } from "@/components/keyframes/intro";
import { SELECTORS, SINGLE_TASK_STAGES } from "../css_references";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
import { fadeSimpleOUT, scaleToLeft } from "@/components/keyframes/outro";

const hideSingleTaskWrapper = keyframes({
    from: {
        maxHeight: "100px",
    },
    to: {
        maxHeight: 0,
        margin: 0,
        padding: 0,
        transform: "scaleX(0)",
    },
});

const ELEMENTS_INVOLVED_IN_ANIMATION: Selector = [
    SELECTORS.SINGLE_TASK.DESCRIPTION, //
    SELECTORS.SINGLE_TASK.LABELS_WRAPPER,
    SELECTORS.SINGLE_TASK.CHECK_ICON,
].join(", ");

export default styled("div")(({ theme }) => ({
    background: theme.palette.background.default,
    width: "100%",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "8px 12px",
    borderRadius: "5px",
    position: "relative",
    paddingRight: "40px",
    zIndex: 1,
    backdropFilter: "blur(3px)",
    "&:not(&:nth-of-type(1))": {
        marginTop: "24px",
    },

    [`&.${SINGLE_TASK_STAGES.CHECKED}`]: {
        background: theme.palette.background.lightSectionBackground,
        [SELECTORS.SINGLE_TASK.CHECK_ICON]: {
            "svg.check-icon": {
                opacity: 1,
            },
        },
        [SELECTORS.SINGLE_TASK.DESCRIPTION]: {
            "&::before": {
                transform: "scaleX(1)",
            },
        },
        [SELECTORS.SINGLE_TASK.BACKGROUND]: {
            transform: "scaleX(0)",
        },
        [SELECTORS.SINGLE_TASK.LABEL]: {
            background: "none",
            color: alpha("#fff", 0.3),
            border: `2px solid ${alpha("#fff", 0.3)} !important`,
        },
        color: alpha("#fff", 0.3),
    },

    [`&.${SINGLE_TASK_STAGES.DELETING}`]: {
        animation: chainAnimations([
            [scaleToLeft, 0.3, 0.5],
            [hideSingleTaskWrapper, 0.15, 0.1],
        ]),
        [ELEMENTS_INVOLVED_IN_ANIMATION]: {
            position: "relative",
            "&::after": {
                content: "''",
                ...theme.mixins.absolute_full,
                background: theme.palette.background.lightAnimationBar,
                borderRadius: "3px",
                animation: chainAnimations([
                    [scaleFromBottom, 0.2],
                    [scaleToLeft, 0.2, 0.2],
                ]),
            },

            "&>*": {
                animation: `${fadeSimpleOUT} .001s .3s both`,
            },
        },

        // Use different color when a task is urgent
        [`&.${SINGLE_TASK_STAGES.URGENT}`]: {
            [ELEMENTS_INVOLVED_IN_ANIMATION]: {
                "&::after": {
                    background: theme.palette.primary.main,
                },
            },
        },

        [`${SELECTORS.SINGLE_TASK.DESCRIPTION}::before`]: {
            animation: `${fadeSimpleOUT} .001s .3s both`,
        },

        [SELECTORS.SINGLE_TASK.CHECK_ICON]: {
            "&::after": {
                width: "calc(100% + 4px)",
                height: "calc(100% + 4px)",
                top: "-2px",
                left: "-2px",
            },
        },
    },

    [`&.${SINGLE_TASK_STAGES.IN_EDIT_MODE}`]: {
        [SELECTORS.SINGLE_TASK.BACKGROUND]: {
            transform: "scaleX(1)",
            "&.active": {
                transition: "background .2s",
            },
        },
    },
}));
