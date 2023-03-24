// Tools
import { styled } from "@mui/material";

export default styled("h4")(({ theme }) => ({
    margin: "0 0 16px 0",
    textAlign: "center",
    fontWeight: 700,
    fontFamily: "Montserrat Alternates",
    fontSize: "24px",
    lineHeight: "34px",
    cursor: "default",
    strong: {
        position: "relative",
        "&::before": {
            content: '""',
            ...theme.mixins.absolute_full,
            background: theme.palette.primary.main,
            zIndex: -1,
            transform: "scale(1.04) rotate(-1deg)",
        },
    },
}));
