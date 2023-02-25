// Tools
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
// Types
import type { FunctionComponent } from "react";
// Other components
const NumberOfFeatures = dynamic(() => import("./NumberOfFeatures"));
// Styled components
import Thumbnail from "@/components/atoms/single_project/Thumbnail";

interface ThumbnailProps {
    id: string;
    folder: string;
    numberOfFeautres: number;
}

const ThumbnailBase: FunctionComponent<ThumbnailProps> = (props) => {
    const router = useRouter();

    return (
        <Thumbnail
            folder={props.folder} //
            onClick={() => router.push(`/projects/${props.id}`)}
            sx={{
                width: "100%",
                overflow: "hidden",
                flexGrow: 1,
                marginBottom: "20px",
            }}
        >
            {props.numberOfFeautres ? <NumberOfFeatures numberOfFeatures={props.numberOfFeautres} /> : <></>}
        </Thumbnail>
    );
};

export default ThumbnailBase;
