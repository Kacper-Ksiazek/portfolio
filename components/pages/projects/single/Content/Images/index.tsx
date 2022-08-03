// Tools
import { useState, useEffect, useRef } from "react";
import useImagesWrapperContext from "@/components/pages/projects/single/Content/Images/hooks/useImagesWrapperContext";
// Types
import type { FunctionComponent } from "react";
import type { Feature } from "@/@types/prisma/Project";
// Other components
import Features from "./Features";
import ProjectThumbnail from "./ProjectThumbnail";
import { ImagesWrapperContextProvider } from "./context";
import BottomRightCornerActions from "./BottomRightCornerActions";
// Styled components
import PictureWrapper from "./MainWrapper";

interface ContextWrapperProps {
    folder: string;
    features: Feature[];
}

const ImagesWrapper: FunctionComponent = () => {
    const context = useImagesWrapperContext();

    const pendingTimeout = useRef<number>(-1);
    const [renderFeatures, setRenderFeatures] = useState<boolean>(false);

    useEffect(() => {
        clearTimeout(pendingTimeout.current);
        if (context.openBrowseFeatures === true) {
            setRenderFeatures(true);
        } else if (context.openBrowseFeatures === false) {
            pendingTimeout.current = setTimeout(() => setRenderFeatures(false), 1000) as any;
        }
    }, [context.openBrowseFeatures]);

    return (
        <PictureWrapper id="images-wrapper">
            <BottomRightCornerActions />

            <ProjectThumbnail />
            {renderFeatures && <Features />}
        </PictureWrapper>
    );
};

const ContextWrapper: FunctionComponent<ContextWrapperProps> = (props) => {
    return (
        <ImagesWrapperContextProvider {...props}>
            <ImagesWrapper />
        </ImagesWrapperContextProvider>
    );
};

export default ContextWrapper;
