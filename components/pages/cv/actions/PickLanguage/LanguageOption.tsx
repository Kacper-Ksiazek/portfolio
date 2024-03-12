// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "relative",
    cursor: "pointer",
    img: {
        width: "64px",
        filter: "grayscale(100%)",
        transition: "filter .3s ease-in-out",
    },
    "&::after": {
        content: "''",
        ...theme.mixins.absolute_full,
        height: "40px",
        background: theme.palette.text.secondary,
        opacity: 0.5,
        transition: "opacity .3s ease-in-out",
    },

    "&:hover::after": {
        opacity: 0.3,
    },

    "&.current": {
        img: {
            filter: "grayscale(0)",
        },
        "&::after": {
            opacity: 0,
        },
    },
}));
