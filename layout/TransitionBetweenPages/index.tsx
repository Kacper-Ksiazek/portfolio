// Tools
import Router from "next/router";
import { useEffect, useState } from "react";
// Types
import type { FunctionComponent, Dispatch, SetStateAction } from "react";
// Styled Components
import { RectangleOne, RectangleTwo } from "./Rectangles";

interface TransitionBetweenPagesProps {
    setRenderContent: Dispatch<SetStateAction<boolean>>;
}

const TransitionBetweenPages: FunctionComponent<TransitionBetweenPagesProps> = (props) => {
    const INTRO_ANIMATION_DURATION: number = 350; // In ms
    const OUTRO_ANIMATION_DURATION: number = 400; // in ms also

    const [renderElements, setRenderElements] = useState<boolean>(false);
    const [displayOutroAnimation, setDisplayOutroAnimation] = useState<boolean>(false);
    const [newPageHasBeenLoaded, setNewPageHasBeenLoaded] = useState<boolean>(false);
    const [introAnimationHasEnded, setIntroAnimationHasEnded] = useState<boolean>(false);

    useEffect(() => {
        if (introAnimationHasEnded && renderElements && newPageHasBeenLoaded) {
            setDisplayOutroAnimation(true);
            props.setRenderContent(true);
            setTimeout(() => {
                setRenderElements(false);
                setDisplayOutroAnimation(false);
                setNewPageHasBeenLoaded(false);
                setIntroAnimationHasEnded(false);
            }, OUTRO_ANIMATION_DURATION);
        }
    }, [introAnimationHasEnded, renderElements, newPageHasBeenLoaded, props]);

    Router.events.on("routeChangeStart", () => {
        setRenderElements(true);
        setTimeout(() => {
            setIntroAnimationHasEnded(true);
            props.setRenderContent(false);
        }, INTRO_ANIMATION_DURATION);
    });
    Router.events.on("routeChangeComplete", () => {
        setNewPageHasBeenLoaded(true);
    });

    if (renderElements) {
        return (
            <>
                <RectangleOne className={displayOutroAnimation ? "outro" : ""} />
                <RectangleTwo className={displayOutroAnimation ? "outro" : ""}>
                    <span>Loading...</span>
                </RectangleTwo>
            </>
        );
    }
    return <></>;
};

export default TransitionBetweenPages;
