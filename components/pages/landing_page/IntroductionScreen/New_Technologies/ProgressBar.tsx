// Tools
import { styled, alpha, keyframes } from "@mui/system";
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
    "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "-32px",
        background: alpha("#fff", 0.074),
        width: "100%",
        height: "calc(100% + 12px)",
        transition: "opacity .4s .45s",
        transformOrigin: "left",
        borderRadius: "4px",
        opacity: 0,
    },
    "&.completed": {
        maxHeight: "32px",
        cursor: "pointer",
        background: theme.palette.secondary.main,
        ".continue": {
            visibility: "visible",
            animation: `${fadeSimple} .2s .5s both linear`,
            transition: "color .1s .1s linear",
        },
        ".indicator": {
            maxHeight: "32px",
            transition: "max-height .2s .4s linear, width .3s linear",
        },
        "&::before": {
            opacity: 1,
            animation: `${keyframes({
                from: {
                    transform: "scaleX(1.02) translateY(-50%) skewX(-10deg)",
                },
                to: {
                    transform: "scaleX(1.24) translateY(-50%) skewX(-10deg)",
                },
            })} 1s infinite alternate`,
        },
        "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "10px",
            height: "100%",
            width: "6px",
            background: theme.palette.background.lightAnimationBar,
            transition: "transform .2s .5s, left .2s .1s, width .3s",
            transformOrigin: "top",
            transform: "scaleY(0)",
            borderRadius: "4px",
        },
        "&:hover": {
            width: "320px",
            ".continue": {
                color: theme.palette.primary.main,
                transition: "color .1s .4s linear",
            },
            "&::before": {
                opacity: 0,
                transition: "opacity .2s",
            },
            "&::after": {
                left: 0,
                width: "100%",
                transition: "transform .6s, left .2s .3s, width .3s .4s",
                transform: "scaleY(1)",
            },
            ".indicator": {
                maxHeight: "0",
                transition: "max-height .2s linear, width .3s linear",
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
    borderRadius: "4px",
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
    zIndex: 1,
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
                <span>Collect your reward</span>
                <ChevronRight />
            </ContinueBase>
        </ProgresBarWrapper>
    );
};

export default ProgressBar;
