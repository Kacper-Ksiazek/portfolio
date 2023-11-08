// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    width: "100%",
    position: "relative",
    justifyContent: "flex-end",
    "@media (min-width:751px)": {
        "&::after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            zIndex: 10,
        },
        "&.odd::after": {
            left: "auto",
            right: 0,
        },
    },
    "&.even": {
        flexDirection: "row-reverse",
    },
    "&.year-indicating": {
        paddingTop: "160px",
    },
    "&.visible": {
        visibility: "visible",
    },

    "@media (max-width:1000px)": {
        flexDirection: "column !important",
        "&.year-indicating": {
            paddingTop: "16px",
        },
    },
}));
