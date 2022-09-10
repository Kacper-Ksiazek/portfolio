// Tools
import { createContext, useState } from "react";
// Types
import type { FunctionComponent, SetStateAction, Dispatch, ReactNode } from "react";

interface LandingScreenContextInterface {
    isHovered: boolean;
    setIsHovered: Dispatch<SetStateAction<boolean>>;
    previewThumbnail: boolean;
    setPreviewThumbnail: Dispatch<SetStateAction<boolean>>;
}

export const LandingScreenContext = createContext<LandingScreenContextInterface>({} as any);

export const LandingScreenContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [previewThumbnail, setPreviewThumbnail] = useState<boolean>(false);

    return (
        <LandingScreenContext.Provider
            value={{
                isHovered, //
                previewThumbnail,
                setIsHovered,
                setPreviewThumbnail,
            }}
        >
            {/*  */}
            {props.children}
        </LandingScreenContext.Provider>
    );
};
