// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: "0",
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url("/images/single-project/relevent-technologies-background/${theme.palette.mode}.svg")`,
}));
