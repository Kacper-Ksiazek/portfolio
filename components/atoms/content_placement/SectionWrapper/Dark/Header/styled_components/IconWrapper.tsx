// Tools
import { styled } from "@mui/system";
// Styled components
export default styled("span")(({ theme }) => ({
    position: "absolute !important",
    top: "-32%",
    zIndex: -1,
    color:
        theme.palette.mode === "light" //
            ? "#64516A"
            : "#892E45",
    svg: {
        fontSize: "256px",
    },
    ["@media (max-width:500px)"]: {
        top: "-12%",
    },
}));
