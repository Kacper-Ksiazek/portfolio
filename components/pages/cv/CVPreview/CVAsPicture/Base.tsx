// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    ...theme.mixins.absolute_full,
    "&::after": {
        content: '"Click to open PDF preview"',
        ...theme.mixins.absolute_full,
        ...theme.mixins.flex_center,
        backdropFilter: "blur(2px)",
        fontSize: "32px",
        cursor: "pointer",
        opacity: 0,
        transition: "opacity 0.3s ease-in-out",
        fontWeight: "bold",
    },
    "&>div.image": {
        ...theme.mixins.absolute_full,
        backgroundPosition: "top center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.3s ease-in-out, opacity 0.3s ease-in-out",
    },
    "&:hover": {
        "&::after": {
            opacity: 1,
        },

        "&>div.image": {
            opacity: 0.4,
        },
    },

    "&.dark": {
        "&::after": {
            color: "#fff",
        },
    },

    "&.light": {
        "&::after": {
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
        },
    },
}));
