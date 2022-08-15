// Tools
import { styled, alpha } from "@mui/system";
// Styled components
export default styled("span")(({ theme }) => ({
    width: "350px",
    background: alpha(theme.palette.primary.main, 0.2),
    "&:nth-of-type(1)": {
        marginRight: "120px",
    },
    ["@media (max-width:1100px)"]: {
        borderRadius: "20px ",
        width: "300px",
        "&:nth-of-type(1)": {
            marginRight: "100px",
        },
    },
    ["@media (max-width:900px)"]: {
        "&:nth-of-type(1)": {
            marginRight: "80px",
        },
    },
    ["@media (max-width:800px)"]: {
        borderRadius: "20px ",
        width: "280px",
        "&:nth-of-type(1)": {
            marginRight: "60px",
        },
    },
    ["@media (max-width:700px)"]: {
        borderRadius: "20px ",
        width: "260px",
        "&:nth-of-type(1)": {
            marginRight: "50px",
        },
    },
}));
