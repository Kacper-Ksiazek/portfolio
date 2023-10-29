import { useRef, useEffect, useState, useCallback } from "react";

const OUTRO_ANIMATION_DURATION = 300;
const INTRO_ANIMATION_DURATION = 1300;

type Animation = "intro" | "outro" | "initial_hide" | null;

interface UseLetterToDisplayResult {
    letter: string | null;
    animation: Animation;
}

export function useLetterToDisplay(receivedLetter: string): UseLetterToDisplayResult {
    const _timeout = useRef<NodeJS.Timeout | null>(null);
    const _latestSetLetter = useRef<string | null>(null);

    const [letterToDisplay, setLetterToDisplay] = useState<string | null>(null);
    const [animationToDisplay, setAnimationToDisplay] = useState<Animation>("initial_hide");

    const displayIntroAnimation = useCallback((letterToSet: string) => {
        if (_timeout.current !== null) clearTimeout(_timeout.current);

        setLetterToDisplay(letterToSet);
        setAnimationToDisplay("intro");

        _timeout.current = setTimeout(() => {
            _timeout.current = null;
            setAnimationToDisplay(null);
        }, INTRO_ANIMATION_DURATION);
    }, []);

    const displayOutroAnimation = useCallback(
        (letterToSet: string) => {
            if (_timeout.current !== null) clearTimeout(_timeout.current);

            setAnimationToDisplay("outro");
            _timeout.current = setTimeout(() => {
                _timeout.current = null;
                displayIntroAnimation(letterToSet);
            }, OUTRO_ANIMATION_DURATION);
        },
        [displayIntroAnimation]
    );

    useEffect(() => {
        // If the received letter is the same as the one that is already set, do nothing
        if (receivedLetter === _latestSetLetter.current) return;
        // Otherwise set the latest received letter
        _latestSetLetter.current = receivedLetter;

        // If there is no letter to display, set the received one
        if (letterToDisplay === null) displayIntroAnimation(receivedLetter);
        else displayOutroAnimation(receivedLetter);
    }, [displayIntroAnimation, displayOutroAnimation, letterToDisplay, receivedLetter]);

    return {
        animation: animationToDisplay,
        letter: letterToDisplay,
    };
}
