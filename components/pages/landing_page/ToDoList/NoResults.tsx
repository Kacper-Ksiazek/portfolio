// Tools
import { styled, alpha } from "@mui/system";
import fadeFromBottom from "@/components/keyframes/intro/fadeFromBottom";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import ExploreOff from "@mui/icons-material/ExploreOff";
// Styled components
const NoResultsWrapper = styled("div")(({ theme }) => ({
    height: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    svg: {
        animation: `${fadeFromBottom} .3s .2s both`,
        fontSize: "7rem",
        color: alpha("#fff", 0.6),
        // color: alpha(theme.palette.primary.main, 0.3),
    },
    "span.info": {
        animation: `${fadeFromBottom} .3s both`,
        userSelect: "none",
        fontSize: "18px",
        margin: "10px 0 0 0",
    },
}));

const NoResults: FunctionComponent = (props) => {
    return (
        <NoResultsWrapper>
            <ExploreOff />
            <span className="info">There are currently no tasks</span>
        </NoResultsWrapper>
    );
};

export default NoResults;
