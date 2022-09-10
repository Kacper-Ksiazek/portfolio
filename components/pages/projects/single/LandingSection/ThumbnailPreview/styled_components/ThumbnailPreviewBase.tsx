// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    "&::after": {
        content: '""',
        position: "absolute",
        top: "12px",
        right: "-16px",
        width: "8px",
        height: "8px",
        background: "#fff",
        borderRadius: "4px",
        transition: "top .3s",
    },
    "&.preview-thumbnail": {
        "&::after": {
            top: "58px",
        },
    },
}));
