// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    marginTop: "24px",
    gap: "18px",
    a: {
        textDecoration: "none",
    },
    svg: {
        fontSize: "48px",
        opacity: 0.8,
        color: "#fff",
        transition: "all .3s",
        "&:hover, &.active": {
            opacity: 1,
            cursor: "pointer",
            color: theme.palette.primary.main,
            transform: "scale(1.1)",
        },
    },
}));
