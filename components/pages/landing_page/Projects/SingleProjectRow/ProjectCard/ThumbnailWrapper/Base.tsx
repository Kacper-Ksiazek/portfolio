// Tools
import { styled } from "@mui/material";
import { SELECTORS } from "../../css_references";
// Styled components

export default styled("div")(({ theme }) => ({
    "@media (max-width:750px)": {
        width: "100%",
        marginBottom: "6px",
    },
    [SELECTORS.THUMBNAIL.WRAPPER]: {
        height: "200px",
        width: "240px",
        position: "relative",
        transition: "width .3s easie-in-out",

        "&::after": {
            content: "''",
            zIndex: 5,
            ...theme.mixins.absolute_full,
            background: theme.palette.primary.main,
        },
        "@media (max-width:1000px)": {
            height: "240px",
            width: "320px",
        },
        "@media (max-width:800px)": {
            height: "200px",
            width: "240px",
        },
        "@media (max-width:750px)": {
            marginBottom: "16px",
            width: "100%",
            height: "auto",
            maxWidth: "500px",
            aspectRatio: "3/2",
        },
    },
}));
