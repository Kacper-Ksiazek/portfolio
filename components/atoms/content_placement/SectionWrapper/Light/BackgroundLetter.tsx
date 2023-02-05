// Tools
import { useRef, useEffect } from "react";
import { styled, alpha, keyframes } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";
import type { FunctionComponent } from "react";
// Styled components
import ContentWrapper from "../_ContentWrapper";

const intro = keyframes({
    "0%": {
        opacity: 0,
        transform: "translate(-50%,-100px)",
    },
    "100%": {
        transform: "translate(-50%,0%)",
        opacity: 1,
    },
});
const outro = keyframes({
    "0%": {
        transform: "translateX(-50%)",
        opacity: 1,
    },
    "100%": {
        opacity: 0,
        transform: "translateX(calc(-50% + 100px))",
    },
});

const BackgroundLetterBase = styled(ContentWrapper)(({ theme }) => ({
    color: alpha(theme.palette.secondary.main, 0.07),
    ["@media (min-width:1001px)"]: {
        fontSize: "1000px",
        fontWeight: 900,
        position: "absolute",
        bottom: "0",
        userSelect: "none",
        zIndex: 1,
        left: "50%",
        transform: "translateX(-50%)",
        lineHeight: "800px",
        fontFamily: "Montserrat Alternates",
        "&.hide": {
            display: "none",
        },
        "&.intro": {
            animation: `${intro} .3s linear both`,
        },
        "&.outro": {
            animation: `${outro} .3s linear both`,
        },
    },
    ["@media (max-width:1000px)"]: {
        display: "none",
    },
}));

const BackgroundLetter: FunctionComponent<{ letter: string; sx: SxProps }> = (props) => {
    // Styled Components
    const previousLetter = useRef<string>("");

    const previousLetterElement = useRef<HTMLDivElement | null>(null);
    const currentLetterElement = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        previousLetter.current = props.letter;

        previousLetterElement.current?.classList.remove("hide");
        currentLetterElement.current?.classList.add("hide");
        previousLetterElement.current?.classList.add("outro");
        currentLetterElement.current?.classList.remove("intro");

        setTimeout(() => {
            currentLetterElement.current?.classList.remove("hide");
            previousLetterElement.current?.classList.add("hide");
            previousLetterElement.current?.classList.remove("outro");
            currentLetterElement.current?.classList.add("intro");
        }, 1800);
    }, [props.letter]);

    return (
        <>
            <BackgroundLetterBase ref={previousLetterElement} sx={props.sx}>
                {previousLetter.current}
            </BackgroundLetterBase>
            <BackgroundLetterBase ref={currentLetterElement} sx={props.sx}>
                {props.letter}
            </BackgroundLetterBase>
        </>
    );
};

export default BackgroundLetter;
