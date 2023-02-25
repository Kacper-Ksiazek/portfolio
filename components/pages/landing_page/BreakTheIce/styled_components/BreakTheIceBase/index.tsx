// Tools
import RWD from "./RWD";
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    marginTop: "16px",
    flexGrow: "1",
    justifyContent: "space-between",
    width: "100%",

    ...(RWD as any),
}));
