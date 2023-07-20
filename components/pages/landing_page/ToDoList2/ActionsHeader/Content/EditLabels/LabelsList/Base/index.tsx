// Tools
import { alpha, styled } from "@mui/material";

export default styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "auto 180px 1fr auto",
    gridTemplateRows: "repeat(4, 1fr)",
    width: "100%",
    alignItems: "stretch",
    gridGap: "4px",
    "&>*": {
        padding: "8px 20px",
        borderRadius: "3px",
        border: `1px solid ${alpha("#fff", 0.3)}`,
    },
}));
