// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "250px",
    width: "calc(100% - 250px)",
    boxSizing: "border-box",
    position: "relative",
    cursor: "pointer",
    zIndex: 2,
    ".read-more": {
        marginTop: "16px",
        alignSelf: "flex-start",
        position: "relative",
        button: {
            width: "130px",
            fontFamily: "Montserrat Alternates",
            fontSize: "14px",
        },
        ["@media (max-width:750px)"]: {
            button: {
                width: "160px",
            },
        },
        ["@media (max-width:500px)"]: {
            width: "100%",
            marginTop: "32px",
            button: {
                width: "100%",
            },
        },
    },
}));
