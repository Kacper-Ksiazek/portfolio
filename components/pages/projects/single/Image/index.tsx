// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { Feature } from "@/@types/prisma/Project";
// Other components
import ProjectThumbnail from "./ProjectThumbnail";
// Styled components
const PictureWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    height: "600px",
    background: "red",
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "20px",
}));

interface ImageProps {
    folder: string;
    features: Feature[];
}

const Image: FunctionComponent<ImageProps> = (props) => {
    return (
        <PictureWrapper>
            <ProjectThumbnail src={`/upload/projects/${props.folder}/thumbnail/fullsize.jpg`} />
        </PictureWrapper>
    );
};

export default Image;
