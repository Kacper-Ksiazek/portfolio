// Tools
import RWD from "./RWD";
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexGrow: 1,
    ...(RWD as any),
}));
