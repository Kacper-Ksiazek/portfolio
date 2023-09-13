// Tools
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "../css_references";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",

    [`.${CSS_REFERENCES.STEP_WRAPPER}`]: {
        display: "flex",
        alignItems: "center",
    },

    ["@media (max-width:770px)"]: {
        flexDirection: "column",
        marginBottom: "8px",
        width: "100%",

        [`.${CSS_REFERENCES.DIVIDER}`]: {
            display: "none",
        },

        [`.${CSS_REFERENCES.STEP_WRAPPER}`]: {
            width: "100%",
            "&:not(&:nth-of-type(1))": {
                marginTop: "8px",
            },

            [`.${CSS_REFERENCES.STEP_BUTTON}`]: {
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
