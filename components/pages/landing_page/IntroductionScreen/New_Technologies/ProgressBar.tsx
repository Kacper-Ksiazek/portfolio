// Tools
import { styled, alpha } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import { useLandingScreenTechnologiesContext } from "./hooks/useLandingScreenTechnologiesContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import ChevronRight from "@mui/icons-material/ChevronRight";
// Styled components
const ProgresBarWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: "16px",
    left: "50%",
    transform: "translateX(-50%) scaleX(0)",
    zIndex: 100,
    width: "300px",
    borderRadius: "4px",
    overflow: "hidden",
    background: alpha(theme.palette.secondary.main, 0.5),
    height: "32px",
    maxHeight: "8px",
    transition: "max-height .2s .3s linear, transform .3s linear, width .2s linear, background .001s .5s",
    "&:not(&.hide)": {
        transform: "translateX(-50%) scaleX(1)",
        ".indicator": {
            visibility: "visible",
            animation: `${fadeSimple} .2s .3s both linear`,
        },
    },
    "&.completed": {
        maxHeight: "32px",
        cursor: "pointer",
        background: theme.palette.background.lightAnimationBar,
        ".continue": {
            visibility: "visible",
            animation: `${fadeSimple} .2s .5s both linear`,
        },
        ".indicator": {
            maxHeight: "32px",
            transition: "max-height .2s linear, width .3s linear",
        },
        "&:hover": {
            width: "320px",
            ".indicator": {
                maxHeight: "0",
            },
            ".continue": {
                color: theme.palette.primary.main,
            },
        },
    },
}));

const ProgressIndicator = styled("span")(({ theme }) => ({
    height: "100%",
    transition: "width .3s linear",
    background: theme.palette.primary.main,
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
}));

const ContinueBase = styled("span")(({ theme }) => ({
    visibility: "hidden",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    fontFamily: "Montserrat Alternates",
    fontSize: "18px",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color .2s",
    svg: {
        marginLeft: "4px",
    },
}));

interface ProgressBarProps {
    //
}

const ProgressBar: FunctionComponent<ProgressBarProps> = (props) => {
    const { progress } = useLandingScreenTechnologiesContext();

    return (
        <ProgresBarWrapper
            className={[
                progress === 100 ? "completed" : "", //
                progress === 0 ? "hide" : "",
            ].join(" ")}
        >
            <ProgressIndicator style={{ width: `${progress}%` }} className="indicator" />
            <ContinueBase className="continue">
                <span>Continue</span>
                <ChevronRight />
            </ContinueBase>
        </ProgresBarWrapper>
    );
};

export default ProgressBar;
