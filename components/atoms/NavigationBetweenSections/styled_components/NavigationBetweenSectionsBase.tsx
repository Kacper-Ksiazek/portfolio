// Tools
import { styled } from "@mui/material";
import * as CSSClasses from "../CSSClasses";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",

    [`.${CSSClasses.STEP_WRAPPER}`]: {
        display: "flex",
        alignItems: "center",
    },

    ["@media (max-width:770px)"]: {
        flexDirection: "column",
        marginBottom: "16px",
        width: "100%",

        [`.${CSSClasses.DIVIDER}`]: {
            display: "none",
        },

        [`.${CSSClasses.STEP_WRAPPER}`]: {
            width: "100%",
            marginTop: "8px",

            [`.${CSSClasses.STEP_BUTTON}`]: {
                border: `1px solid ${theme.palette.secondary.main}`,
                width: "100%",
                padding: "8px 12px",
                "&.selected": {
                    border: `1px solid ${theme.palette.primary.main}`,
                },
            },
        },
    },
}));
