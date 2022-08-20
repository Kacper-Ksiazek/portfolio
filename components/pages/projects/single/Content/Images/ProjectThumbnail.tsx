// Tools
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { uploadedProjectImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/project";
import useImagesWrapperContext from "@/components/pages/projects/single/Content/Images/hooks/useImagesWrapperContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/Image";
const ImageModal = dynamic(() => import("@/components/_utils/ImageModel"));

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
                className={`project-thumbnail`}
                layout="fill"
                src={projectThumbnailURL}
                objectFit="cover"
                objectPosition="center"
                priority
            />

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
