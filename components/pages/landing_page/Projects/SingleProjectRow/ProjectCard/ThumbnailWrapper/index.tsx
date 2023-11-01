// Tools
import { useRouter } from "next/router";
// Types
import type { FunctionComponent } from "react";
// Other components
import Thumbnail from "@/components/atoms/single_project/Thumbnail";
// Styled Components
import ThumbnailWrapperBase from "./Base";

interface ThumbnailWrapperProps {
    id: string;
    folder: string;
}

const ThumbnailWrapper: FunctionComponent<ThumbnailWrapperProps> = (props) => {
    const router = useRouter();

    function redirect() {
        router.push(`/projects/${props.id}`);
    }

    return (
        <ThumbnailWrapperBase>
            <Thumbnail folder={props.folder} onClick={redirect} />
        </ThumbnailWrapperBase>
    );
};

export default ThumbnailWrapper;
