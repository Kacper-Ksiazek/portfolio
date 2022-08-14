// Tools
import { useState, createContext } from "react";
// Tools
import type { Feature } from "@/@types/prisma/Project";
import type { Dispatch, SetStateAction, FunctionComponent, ReactNode } from "react";

interface ImagesWrapperContextInterface {
    features: Feature[];
    folder: string;
    renderMobileFeaturesList: boolean;

    openThumbnailModal: boolean;
    openBrowseFeatures: boolean;
    indexOfFeatureToDisplay: number | null;

    setOpenThumbnailModal: Dispatch<SetStateAction<boolean>>;
    setOpenBrowseFeatures: Dispatch<SetStateAction<boolean>>;
    setIndexOfFeatureToDisplay: Dispatch<SetStateAction<number | null>>;
}

interface ImagesWrapperContextProviderProps {
    children: ReactNode;
    features: Feature[];
    folder: string;
    renderMobileFeaturesList: boolean;
}

export const ImagesWrapperContext = createContext<ImagesWrapperContextInterface>({} as any);

export const ImagesWrapperContextProvider: FunctionComponent<ImagesWrapperContextProviderProps> = (props) => {
    const [openThumbnailModal, setOpenThumbnailModal] = useState<boolean>(false);
    const [openBrowseFeatures, setOpenBrowseFeatures] = useState<boolean>(false);
    const [indexOfFeatureToDisplay, setIndexOfFeatureToDisplay] = useState<number | null>(null);

    return (
        <ImagesWrapperContext.Provider
            value={{
                features: props.features,
                folder: props.folder,
                renderMobileFeaturesList: props.renderMobileFeaturesList,
                //
                openThumbnailModal,
                openBrowseFeatures,
                indexOfFeatureToDisplay,
                //
                setOpenThumbnailModal,
                setOpenBrowseFeatures,
                setIndexOfFeatureToDisplay,
            }}
        >
            {props.children}
        </ImagesWrapperContext.Provider>
    );
};
