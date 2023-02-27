// Tools
import { styled } from "@mui/material";
// Material UI Components
import Alert from "@mui/material/Alert";
// Styled components
export default styled(Alert)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    "&>.MuiAlert-message": {
        flexGrow: 1,
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        padding: "3px 10px",
        userSelect: "none",
    },
    background: "transparent !important",
}));
