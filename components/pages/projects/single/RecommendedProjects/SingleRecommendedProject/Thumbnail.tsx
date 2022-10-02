// Tools
import { useRouter } from "next/router";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
import Thumbnail from "@/components/atoms/single_project/Thumbnail";

interface ThumbnailProps {
    id: string;
    folder: string;
    children: ReactNode;
}

const ThumbnailBase: FunctionComponent<ThumbnailProps> = (props) => {
    const router = useRouter();

    return (
        <Thumbnail
            folder={props.folder} //
            onClick={() => router.push(`/projects/${props.id}`)}
        >
            {props.children}
        </Thumbnail>
    );
};

export default ThumbnailBase;
