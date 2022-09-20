// Tools
import { styled } from "@mui/system";
// Material UI Components
import CircularProgress from "@mui/material/CircularProgress";
// Styled components

export default styled(CircularProgress)(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
}));
