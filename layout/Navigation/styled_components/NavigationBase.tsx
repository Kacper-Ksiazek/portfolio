// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("div")(({ theme }) => ({
    position: "fixed",
    top: "0",
    left: "50%",
    marginTop: "20px",
    transform: "translateX(-50%)",
    width: "1200px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}));
