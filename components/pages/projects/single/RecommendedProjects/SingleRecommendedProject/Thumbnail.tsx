// Types
import type { FunctionComponent } from "react";
// Other components
import Link from "next/Link";
// Styled components
import Thumbnail from "@/components/pages/_shared/single-project/Thumbnail";

interface ThumbnailProps {
    id: string;
    folder: string;
}

const ThumbnailBase: FunctionComponent<ThumbnailProps> = (props) => {
    return (
        <Link href={`/projects/${props.id}`} passHref>
            <Thumbnail folder={props.folder} />
        </Link>
    );
};

export default ThumbnailBase;
