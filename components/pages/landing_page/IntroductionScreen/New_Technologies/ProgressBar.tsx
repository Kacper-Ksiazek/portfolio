// Tools
import { useState } from "react";
import { styled, alpha, keyframes } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import { useLandingScreenTechnologiesContext } from "./hooks/useLandingScreenTechnologiesContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Fade from "@mui/material/Fade";
// Material UI Icons
import ChevronRight from "@mui/icons-material/ChevronRight";
import CircularProgress from "@mui/material/CircularProgress";
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

        "&:not(&.is-processing)": {
            cursor: "pointer",
            "&::before": {
                opacity: 1,
                animation: `${keyframes({
                    from: {
                        transform: "scaleX(1.02) translateY(-50%)",
                    },
                    to: {
                        transform: "scaleX(1.24) translateY(-50%)",
                    },
                })} 1s infinite alternate`,
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
    zIndex: 1,
    svg: {
        marginLeft: "4px",
    },
    "span.txt": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ".MuiCircularProgress-root": {
            color: "inherit",
            marginLeft: "12px",
            svg: {
                color: "inherit",
                margin: 0,
            },
        },
    },
}));

interface ProgressBarProps {
    isProcessing: boolean;
    startProcessing: () => void;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = (props) => {
    const { progress } = useLandingScreenTechnologiesContext();

    const onClick = () => {
        if (progress !== 100) return;
        props.startProcessing();
    };

    return (
        <ProgresBarWrapper
            className={[
                progress === 100 ? "completed" : "", //
                progress === 0 ? "hide" : "",
                props.isProcessing ? "is-processing" : "",
            ].join(" ")}
            onClick={onClick}
        >
            <ProgressIndicator style={{ width: `${progress}%` }} className="indicator" />

            <ContinueBase className="continue">
                <Fade in={!props.isProcessing}>
                    <span className="txt">
                        <span>Collect your reward</span>
                        <ChevronRight />
                    </span>
                </Fade>

                <Fade in={props.isProcessing}>
                    <span className="txt">
                        <CircularProgress size="24px" />
                    </span>
                </Fade>
            </ContinueBase>
        </ProgresBarWrapper>
    );
};

export default ProgressBar;
