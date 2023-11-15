// Tools
import { styled } from "@mui/material";
import { useState, useEffect } from "react";
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled Components
const ScrollButtonBase = styled(ButtonBase)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    padding: "6px 40px",
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: "16px",
    borderRadius: "5px",
    fontFamily: "Montserrat Alternates",
    boxSizing: "border-box",
    overflow: "hidden",
    "span.text": {
        position: "relative",
        zIndex: 2,
        transition: "color .3s",
    },
    transition: "padding .3s",
    "&::before": {
        content: "''",
        position: "absolute",
        width: "110%",
        height: "calc(100% + 10px)",
        background: theme.palette.primary.main,
        transform: "translateY(110%)",
        transition: "transform .3s linear",
    },
    "&:hover": {
        padding: "6px 50px",
        "span.text": {
            color: "#fff",
        },
        "&::before": {
            transform: "translateY(-5px)",
        },
    },
}));

interface ScrollButtonProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const ScrollButton: FunctionComponent<ScrollButtonProps> = (props) => {
    const SCROLL_BUTTON_INTRO_ANIMATION_DURATION: number = 3500; // in ms
    const [introAnimationHadEnded, setIntroAnimationHadEnded] = useState<boolean>(false);

    const onClick = () => {
        if (window) {
            window.scrollTo({
                left: 0,
                top: window.innerHeight + 60,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        setIntroAnimationHadEnded(false);
        const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
            setIntroAnimationHadEnded(true);
        }, SCROLL_BUTTON_INTRO_ANIMATION_DURATION);

        return () => {
            clearTimeout(timeout);
        };
    }, [SCROLL_BUTTON_INTRO_ANIMATION_DURATION]);

    const onlyWhenVisible = (fn: () => void) => {
        if (introAnimationHadEnded) fn();
    };

    return (
        <span id={CSS_REFERENCES.SCROLL_DOWN_BUTTON} style={{ marginTop: "64px" }}>
            <ScrollButtonBase
                onClick={onClick} //
                onMouseEnter={() => onlyWhenVisible(props.onMouseEnter)}
                onMouseLeave={() => onlyWhenVisible(props.onMouseLeave)}
            >
                <span className="text">Scroll down</span>
            </ScrollButtonBase>
        </span>
    );
};

export default ScrollButton;
