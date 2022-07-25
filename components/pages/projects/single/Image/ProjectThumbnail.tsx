// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/Image";
import ImageModal from "@/components/_utils/ImageModel";
// Styled components
import { ImageActionsWrapper, ImagePreviewButton, ImageAction } from "@/components/_styled_components/forms/ImageActions";

interface ProjectThumbnailProps {
    src: string;
}

const ProjectThumbnail: FunctionComponent<ProjectThumbnailProps> = (props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleOpenModal = () => {
        console.log("open modal");
        setOpenModal(true);
    };

    return (
        <>
            <Image
                alt="project-thumbnail" //
                layout="fill"
                src={props.src}
                objectFit="cover"
                objectPosition="center"
                priority
            />
            <ImageActionsWrapper>
                <ImageAction>Browse features</ImageAction>
                <ImagePreviewButton onClick={handleOpenModal} />
            </ImageActionsWrapper>

            <ImageModal
                open={openModal} //
                onClose={() => setOpenModal(false)}
                imageURL={props.src}
            />
        </>
    );
};

export default ProjectThumbnail;
