// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    width: "100%",
    height: "200px",
    position: "relative",
    overflow: "hidden",
    "&::after,&::before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: 2,
    },
    "&::after": {
        background: theme.palette.primary.main,
    },
    "&::before": {
        background: theme.palette.secondary.main,
    },
}));
