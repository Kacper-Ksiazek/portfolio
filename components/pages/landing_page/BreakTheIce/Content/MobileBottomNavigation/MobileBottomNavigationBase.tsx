// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    fontSize: "20px",
    display: "flex",
    marginTop: "64px",
    alignItems: "center",
    border: `1px solid ${theme.palette.secondary.main}`,
    width: "100%",
    padding: "8px 12px",
    boxSizing: "border-box",
    borderRadius: "3px",
    "svg, strong": {
        marginLeft: "8px",
    },
    svg: {
        fontSize: "24px",
    },
    ["@media (min-width:1001px)"]: {
        display: "none",
    },
}));
