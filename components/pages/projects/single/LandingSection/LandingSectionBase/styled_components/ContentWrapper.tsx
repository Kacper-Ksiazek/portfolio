// Tools
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
        background: alpha(theme.palette.primary.main, 0.1),
        height: "530px",
        zIndex: -1,
    },
    "&.hide-content": {},
    "&.display-content": {},
    "&.intro-animation": {},
    ["@media (max-height:900px)"]: {
        marginTop: "200px",
    },
    ["@media (max-height:850px)"]: {
        marginTop: "180px",
    },
    ["@media (max-height:800px)"]: {
        marginTop: "160px",
    },
    ["@media (max-height:760px)"]: {
        marginTop: "140px",
    },
    ["@media (max-height:740px)"]: {
        marginTop: "120px",
    },
    ["@media (max-height:720px)"]: {
        marginTop: "100px",
    },
}));
