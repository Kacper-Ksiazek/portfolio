// Tools
import { styled } from "@mui/material";

export default styled("p")(({ theme }) => ({
    margin: "0 0 8px 0",
    userSelect: "none",
    fontSize: "20px",
    // fontFamily: '"Montserrat Alternates", sans-serif',
    "&:not(&:nth-of-type(1))": {
        marginTop: "12px",
    },
}));
