// Tools
import { useRef, useEffect } from "react";
// Types
import type { FunctionComponent } from "react";
import type { BackgroundLetterProps } from "../@types";
// Styled components
import BackgroundLetterBase from "./Base";

const BackgroundLetter: FunctionComponent<BackgroundLetterProps> = (props) => {
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
            <BackgroundLetterBase
                ref={previousLetterElement} //
                sx={props.sx as any}
                className="hide"
            >
                {previousLetter.current}
            </BackgroundLetterBase>
            <BackgroundLetterBase
                ref={currentLetterElement} //
                sx={props.sx as any}
            >
                {props.letter}
            </BackgroundLetterBase>
        </>
    );
};

export default BackgroundLetter;
