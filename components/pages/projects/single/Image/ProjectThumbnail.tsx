// Tools

// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/Image";

interface ProjectThumbnailProps {
    src: string;
}

const ProjectThumbnail: FunctionComponent<ProjectThumbnailProps> = (props) => {
    return (
        <Image
            alt="project-thumbnail" //
            layout="fill"
            src={props.src}
            objectFit="cover"
            objectPosition="center"
            priority
        />
    );
};

export default ProjectThumbnail;
