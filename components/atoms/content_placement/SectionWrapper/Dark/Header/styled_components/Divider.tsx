// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("span")(({ theme }) => ({
    width: "160px",
    height: "2px",
    borderRadius: "1px",
    marginTop: "16px",
    background:
        theme.palette.mode === "light" //
            ? "#64516A"
            : "#892E45",
}));
