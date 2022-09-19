// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    marginTop: "80px",
    justifyContent: "space-between",
    alignItems: "flex-end",
    "div.simple-flex": {
        display: "flex",
    },
    ["@media (max-height: 600px)"]: {
        marginTop: "60px",
    },
    ["@media (max-width: 600px)"]: {
        flexDirection: "column",
        width: "100%",
        "div.simple-flex": {
            width: "100%",
            flexDirection: "column",
        },
    },
}));
