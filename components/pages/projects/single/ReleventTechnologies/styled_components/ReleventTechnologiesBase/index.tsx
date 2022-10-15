// Tools
import { styled } from "@mui/system";
import introAnimations from "./introAnimations";
// Other components
import DarkWrapperBase from "@/components/atoms/content_placement/SectionWrapper/Dark/DarkWrapperBase";

export default styled(DarkWrapperBase)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    padding: "48px 0 ",
    "&.visible": {
        ...(introAnimations as any),
    },
    ["@media (max-width:900px)"]: {
        flexWrap: "wrap",
    },
    ["@media (max-width:400px)"]: {
        padding: "16px",
    },
}));
