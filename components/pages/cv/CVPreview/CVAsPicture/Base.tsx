// Tools
import { styled } from "@mui/material";
// Styled components
export default styled("div")(({ theme }) => ({
    ...theme.mixins.absolute_full,
    backgroundPosition: "top center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    transition: "background-image 0.3s ease-in-out",
    "&::after": {
        content: '"Click to open PDF preview"',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        ...theme.mixins.absolute_full,
        ...theme.mixins.flex_center,
        backdropFilter: "blur(1px)",
        fontSize: "32px",
        cursor: "pointer",
        opacity: 0,
        transition: "opacity 0.3s ease-in-out",
    },
    "&:hover::after": {
        opacity: 1,
    },
}));
