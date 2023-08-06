// Tools
import { styled } from "@mui/material";

export default styled("p")(({ theme }) => ({
    margin: "0 0 8px 0",
    userSelect: "none",
    fontSize: "20px",
    fontWeight: "500",
    // fontFamily: '"Montserrat Alternates", sans-serif',
    "&:not(&:nth-of-type(1))": {
        marginTop: "12px !important",
        "@media (max-width:770px)": {
            marginTop: "16px !important",
        },
    },
}));
