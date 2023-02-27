// Tools
import { styled } from "@mui/material";
import { useState, useEffect, useRef, useMemo } from "react";
import { usePicturesMatchingGameContext } from "@/components/pages/landing_page/PicturesMatchingGame/hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";

const BackgroundBase = styled("span")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0.2,
    "&.INVALID_CHOICE": {
        background: "#aa1b38",
    },
    "&.CORRECT_CHOICE": {
        background: "#56bc5b",
    },
    transition: "background .5s linear, opacity .3s linear",
    "&.is-summary": {
        opacity: 0.5,
    },
}));

const Picture = styled("span")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transition: "background .5s linear, opacity 1s linear",
}));

const Background: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();
    const displayingPictureIndex = useRef<number>(0);
    const [backgroundImageURL, setBackgroundImageURL] = useState<string>("");

    const uniquePicturesURLs = useMemo<string[]>(() => {
        return [...(new Set(context.gameplay.pictures.map((el) => el.url)) as any)];
    }, [context.gameplay.pictures]);

    const currentStageIsSummary = context.navigation.stage === "SUMMARY";

    useEffect(() => {
        if (!context.gameplay.isOver || !currentStageIsSummary) return;
        setBackgroundImageURL(uniquePicturesURLs[displayingPictureIndex.current]);

        const interval: ReturnType<typeof setInterval> = setInterval(() => {
            if (displayingPictureIndex.current === uniquePicturesURLs.length - 1) displayingPictureIndex.current = 0;
            else displayingPictureIndex.current += 1;

            setBackgroundImageURL(uniquePicturesURLs[displayingPictureIndex.current]);
        }, 2500);

        return () => {
            clearInterval(interval);
        };
    }, [uniquePicturesURLs, context.gameplay.isOver, currentStageIsSummary]);

    return (
        <BackgroundBase
            id="user-choice-animaiton-base" //
            className={[
                context.gameplay.animation ?? "", //
                currentStageIsSummary ? "is-summary" : "",
            ].join(" ")}
        >
            <Picture
                sx={{
                    opacity: currentStageIsSummary ? 1 : 0,
                    backgroundImage: backgroundImageURL ? `url('/images/landing-page/images-matching-game/${backgroundImageURL}/fullsize.jpg')` : "",
                }}
            />
        </BackgroundBase>
    );
};

export default Background;
