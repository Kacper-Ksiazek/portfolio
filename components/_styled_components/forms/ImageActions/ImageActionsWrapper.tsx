// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: "10px",
    right: "10px",
    zIndex: 10,
    display: "flex",
    "button.image-action": {
        padding: "0 24px",
        fontFamily: "Montserrat Alternates",
    },
}));
