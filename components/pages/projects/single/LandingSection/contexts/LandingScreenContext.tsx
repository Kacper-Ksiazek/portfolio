// Tools
import { createContext, useState, useCallback } from "react";
// Types
import type { FunctionComponent, SetStateAction, Dispatch, ReactNode } from "react";

type ContentAnimation = "hide-content" | "display-content" | "intro-animation";
interface LandingScreenContextInterface {
    isHovered: boolean;
    previewThumbnail: boolean;
    contentAnimation: ContentAnimation;

    setIsHovered: Dispatch<SetStateAction<boolean>>;
    openThumbnailPreview: () => void;
    closeThumbnailPreview: () => void;
}

export const LandingScreenContext = createContext<LandingScreenContextInterface>({} as any);

export const LandingScreenContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [previewThumbnail, setPreviewThumbnail] = useState<boolean>(false);
    const [contentAnimation, setContentAnimation] = useState<ContentAnimation>("intro-animation");

    const openThumbnailPreview = useCallback(() => {
        setContentAnimation("hide-content");
        setPreviewThumbnail(true);
    }, []);

    const closeThumbnailPreview = useCallback(() => {
        if (contentAnimation === "intro-animation") return;

        setContentAnimation("display-content");
        setPreviewThumbnail(false);
    }, [contentAnimation]);

    return (
        <LandingScreenContext.Provider
            value={{
                isHovered, //
                previewThumbnail,
                contentAnimation,
                setIsHovered,
                openThumbnailPreview,
                closeThumbnailPreview,
            }}
        >
            {/*  */}
            {props.children}
        </LandingScreenContext.Provider>
    );
};
