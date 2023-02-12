// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import ArrowForward from "@mui/icons-material/ArrowForward";
// Styled Components
const ClickabilityIndicatingArrowBase = styled("span")(({ theme }) => ({
    position: "absolute",
    right: "10%",
    display: "flex",
    alignItems: "center",
    opacity: 0.1,
    svg: {
        fontSize: "2.4rem",
    },
}));

const ClickabilityIndicatingArrow: FunctionComponent = () => {
    return (
        <ClickabilityIndicatingArrowBase className="right-pointing-arrow">
            <ArrowForward />
        </ClickabilityIndicatingArrowBase>
    );
};

export default ClickabilityIndicatingArrow;
