// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("span")(({ theme }) => ({
    background: theme.palette.primary.main,
    borderRadius: "3px",
    color: "#fff",
    width: "30px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    marginRight: "20px",
    fontSize: "20px",
    userSelect: "none",
}));
