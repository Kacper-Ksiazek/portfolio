// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    width: "36px",
    height: "36px",
    display: "flex",
    borderRadius: "3px",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.main,
    opacity: 0.4,
    transition: "opacity .3s",
    svg: {
        transition: "font-size .3s",
    },
    "&.active": {
        opacity: 1,
        svg: {
            fontSize: "32px",
        },
    },
    "&:not(&:nth-of-type(1))": {
        marginTop: "8px",
    },
}));
