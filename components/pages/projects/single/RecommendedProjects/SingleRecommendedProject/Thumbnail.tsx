// Tools
import { useRouter } from "next/router";
// Types
import type { FunctionComponent } from "react";
// Styled components
import Thumbnail from "@/components/atoms/single_project/Thumbnail";

interface ThumbnailProps {
    id: string;
    folder: string;
}

const ThumbnailBase: FunctionComponent<ThumbnailProps> = (props) => {
    const router = useRouter();
    return (
        <Thumbnail
            folder={props.folder} //
            onClick={() => router.push(`/projects/${props.id}`)}
        />
    );
};

export default ThumbnailBase;
