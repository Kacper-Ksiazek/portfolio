// Tools
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import useImagesWrapperContext from "@/components/pages/projects/single/Content/Images/hooks/useImagesWrapperContext";
// Types
import type { FunctionComponent } from "react";
import type { Feature } from "@/@types/prisma/Project";
// Other components
import ProjectThumbnail from "./ProjectThumbnail";
const Features = dynamic(() => import("./Features"));
import { ImagesWrapperContextProvider } from "./context";
import BottomRightCornerActions from "./BottomRightCornerActions";
// Styled components
import PictureWrapper from "./styled_components/MainWrapper";

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
            {!context.renderMobileFeaturesList && renderFeatures && <Features />}
        </PictureWrapper>
    );
};

interface ContextWrapperProps {
    folder: string;
    features: Feature[];
    renderMobileFeaturesList: boolean;
}

const ContextWrapper: FunctionComponent<ContextWrapperProps> = (props) => {
    return (
        <ImagesWrapperContextProvider {...props}>
            <ImagesWrapper />
        </ImagesWrapperContextProvider>
    );
};

export default ContextWrapper;
