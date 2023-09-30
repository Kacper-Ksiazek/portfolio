// Tools
import { styled } from "@mui/material";

// Styled components
export default styled("div")(({ theme }) => ({
    ...theme.mixins.flex_center,
    flexDirection: "column",
    height: "100%",
    "&::before": {
        content: "''",
        position: "absolute",
        ...theme.mixins.absolute_full,
        background: `url(./main-page-logo/grayscale/${theme.palette.mode}.png)`,
        backgroundPosition: "center",
        opacity: 0.2,
        zIndex: 0,
    },
    "&>*": {
        position: "relative",
        zIndex: 1,
    },
}));
