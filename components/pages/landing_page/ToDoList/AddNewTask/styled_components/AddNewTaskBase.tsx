// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("footer")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    width: "100%",
    maxWidth: "800px",
    "&>*": {
        height: "38px",
    },
    ["@media (max-width:600px)"]: {
        flexDirection: "column",
        "&>*": {
            width: "100%",
            margin: 0,
        },
        button: {
            marginTop: "10px",
        },
    },
}));
