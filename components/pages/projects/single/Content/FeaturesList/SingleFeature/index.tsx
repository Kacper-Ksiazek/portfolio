// Tools
import { uploadedProjectImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/project";
// Types
import type { FunctionComponent } from "react";
// Other components
import NextImageWithSkeleton from "@/components/atoms/NextImageWithSkeleton";
// Styled components
import SingleFeatureBase from "./SingleFeatureBase";

interface SingleFeatureProps {
    index: number;
    folder: string;
    imageURL: string;
    previewThisFeature: () => void;
}

const SingleFeature: FunctionComponent<SingleFeatureProps> = (props) => {
    return (
        <SingleFeatureBase
            className="single-feature" //
            onClick={props.previewThisFeature}
        >
            <NextImageWithSkeleton
                alt={props.imageURL} //
                layout="fill"
                src={uploadedProjectImageURLBuilder({
                    folder: props.folder,
                    resolution: "thumbnail",
                    subject: props.imageURL,
                })}
            />
        </SingleFeatureBase>
    );
};

export default SingleFeature;
