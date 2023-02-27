// Tools
import { styled } from "@mui/material";
// Other components
import DarkWrapperBase from "@/components/atoms/content_placement/SectionWrapper/Dark/styled_components/DarkWrapperBase";

export default styled(DarkWrapperBase)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    padding: "48px 0 ",
    ["@media (max-width:900px)"]: {
        flexWrap: "wrap",
    },
    ["@media (max-width:400px)"]: {
        padding: "16px",
    },
}));
