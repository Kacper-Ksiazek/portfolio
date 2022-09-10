// Tools
import RWD from "./RWD";
import { styled, alpha } from "@mui/system";
// Styled components
import ContentWrapperBase from "@/components/_styled_components/content_placement/SectionWrapper/_ContentWrapper";

export default styled(ContentWrapperBase)(({ theme }) => ({
    color: "white",
    zIndex: 10,
    cursor: "default",
    marginTop: "220px",
    ".duration": {
        fontSize: "20px",
    },
    "&::before": {
        content: '""',
        position: "absolute",
        top: "-50px",
        left: " -20px",
        width: "100px",
        background: alpha(theme.palette.primary.main, 0.12),
        height: "530px",
        zIndex: -1,
        transition: "width .3s",
        borderRadius: "3px",
    },
    "&.hide-content": {},
    "&.display-content": {},
    "&.intro-animation": {},
    ...(RWD as any),
}));
