// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { Feature } from "@/@types/prisma/Project";
// Other components
import ProjectThumbnail from "./ProjectThumbnail";
import { ImagesWrapperContextProvider } from "./context";
// Styled components
const PictureWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    height: "600px",
    background: "red",
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "20px 0",
}));

interface ImageProps {
    folder: string;
    features: Feature[];
}

const ImagesWrapper: FunctionComponent = () => {
    return (
        <PictureWrapper>
            <ProjectThumbnail />
        </PictureWrapper>
    );
};

const ContextWrapper: FunctionComponent<ImageProps> = (props) => {
    return (
        <ImagesWrapperContextProvider {...props}>
            <ImagesWrapper />
        </ImagesWrapperContextProvider>
    );
};

export default ContextWrapper;
