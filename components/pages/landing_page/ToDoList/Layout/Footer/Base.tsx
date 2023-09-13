// Tools
import { styled } from "@mui/material";
import { SELECTORS } from "./css_references";

// Styled components
export default styled("div")(({ theme }) => ({
    margin: "32px auto 0 auto",
    display: "flex",
    width: "100%",
    maxWidth: "1040px",
    justifyContent: "space-between",
    [SELECTORS.RESET_BUTTON]: {
        "&>*": {
            width: "100%",
        },
    },
    "@media (max-width:770px)": {
        gap: "6px",
        [SELECTORS.RESET_BUTTON]: {
            flexGrow: 1,
            button: {
                padding: 0,
            },
        },
    },
    "@media (max-width:660px)": {
        flexDirection: "column",
        alignItems: "center",
        padding: "0 12px",
        boxSizing: "border-box",
        "&>*": {
            width: "100%",
        },
    },
    "@media (max-width:500px)": {
        padding: "0",
    },
    //
}));
