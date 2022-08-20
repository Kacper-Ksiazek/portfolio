// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    width: "110px",
    height: "110px",
    padding: "5px",
    background: theme.palette.primary.main,
    borderRadius: "5px",
    position: "relative",
    border: `5px solid ${theme.palette.primary.main}`,
    img: {
        borderRadius: "5px",
    },
}));
