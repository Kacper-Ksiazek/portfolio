// Tools
import { styled } from "@mui/material";

export default styled("p")(({ theme }) => ({
    margin: 0,
    userSelect: "none",
    fontSize: "18px",
    "&:not(&:nth-of-type(1))": {
        marginTop: "12px",
    },
}));
