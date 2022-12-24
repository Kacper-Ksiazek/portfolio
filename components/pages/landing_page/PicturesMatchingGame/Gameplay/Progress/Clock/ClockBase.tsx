// Tools
import { styled, alpha } from "@mui/system";
// Styled components
import { ProgressRow } from "../styled_components";

export default styled(ProgressRow)(({ theme }) => ({
    transition: "color .3s linear, background .3s linear",
    color: alpha("#fff", 0.3),
    "&.counting-active": {
        color: alpha("#fff", 0.9),
        background: alpha(theme.palette.primary.main, 0.5),
    },
    "&.is-over": {
        color: alpha("#fff", 0.9),
        background: theme.palette.success.main,
    },
}));
