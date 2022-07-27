// Tools
import { styled } from "@mui/system";
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
const PictureWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "20px 0",
    //
    height: "550px",
    "#features-overflow-hidden-container": {
        height: "467px",
    },
}));

interface ContextWrapperProps {
    folder: string;
    features: Feature[];
}

const ImagesWrapper: FunctionComponent = () => {
    const context = useImagesWrapperContext();

    const pendingTimeout = useRef<number>(-1);
    const [renderFeatures, setRenderFeatures] = useState<boolean>(false);
    const [renderProjectThumbnail, setRenderProjectThumbnail] = useState<boolean>(true);

    useEffect(() => {
        clearTimeout(pendingTimeout.current);
        if (context.openBrowseFeatures === true) {
            setRenderFeatures(true);
            pendingTimeout.current = setTimeout(() => setRenderProjectThumbnail(false), 1000) as any;
        } else if (context.openBrowseFeatures === false) {
            setRenderProjectThumbnail(true);
            pendingTimeout.current = setTimeout(() => setRenderFeatures(false), 1000) as any;
        }
    }, [context.openBrowseFeatures]);

    return (
        <PictureWrapper id="images-wrapper">
            <BottomRightCornerActions />

            {renderProjectThumbnail && <ProjectThumbnail />}
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
