// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    ".step-wrapper": {
        display: "flex",
        alignItems: "center",
    },
    ["@media (max-width:770px)"]: {
        flexDirection: "column",
        marginBottom: "16px",
        width: "100%",
        ".divider": {
            display: "none",
        },
        ".step-wrapper": {
            width: "100%",
            marginTop: "8px",
            ".single-navigation-button": {
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
