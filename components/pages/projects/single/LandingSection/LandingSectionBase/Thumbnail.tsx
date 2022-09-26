// Tools
import { uploadedProjectImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/project";
// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/image";
// Styled components
import ImageMask from "./styled_components/ImageMask";
import ImageWrapper from "./styled_components/ImageWrapper";

interface ThumbnailProps {
    folder: string;
}

const Thumbnail: FunctionComponent<ThumbnailProps> = (props) => {
    return (
        <>
            <ImageWrapper id="project-landing-screen-image-wrapper">
                <Image
                    alt="Project thumbnail"
                    src={uploadedProjectImageURLBuilder({
                        folder: props.folder,
                        resolution: "fullsize",
                        subject: "thumbnail",
                    })}
                    layout="fill"
                    priority
                />
            </ImageWrapper>
            <ImageMask id="project-landing-screen-image-mask" />
        </>
    );
};

export default Thumbnail;
