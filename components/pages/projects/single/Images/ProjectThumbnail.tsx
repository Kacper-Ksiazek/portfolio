// Tools
import { useMemo } from "react";
import dynamic from "next/dynamic";
import useImagesWrapperContext from "@/components/pages/projects/single/Images/hooks/useImagesWrapperContext";
import uploadedProjectImageURLBuilder from "@/utils/client/uploaded_image_url_builder/project";
// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/Image";
const ImageModal = dynamic(() => import("@/components/_utils/ImageModel"));
// Styled components
import { ImageActionsWrapper, ImagePreviewButton, ImageAction } from "@/components/_styled_components/forms/ImageActions";

const ProjectThumbnail: FunctionComponent = (props) => {
    const context = useImagesWrapperContext();

    const projectThumbnailURL = useMemo<string>(() => {
        return uploadedProjectImageURLBuilder({
            resolution: "fullsize",
            subject: "thumbnail",
            folder: context.folder,
        });
    }, [context.folder]);

    return (
        <>
            <Image
                alt="project-thumbnail" //
                layout="fill"
                src={projectThumbnailURL}
                objectFit="cover"
                objectPosition="center"
                priority
            />
            <ImageActionsWrapper>
                <ImageAction>Browse features</ImageAction>
                <ImagePreviewButton onClick={() => context.setOpenThumbnailModal(true)} />
            </ImageActionsWrapper>

            {context.openThumbnailModal && (
                <ImageModal
                    open={context.openThumbnailModal} //
                    onClose={() => context.setOpenThumbnailModal(false)}
                    imageURL={projectThumbnailURL}
                />
            )}
        </>
    );
};

export default ProjectThumbnail;
