// Tools
import uploadedProjectImageURLBuilder from "@/utils/client/uploaded_image_url_builder/project";
// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/Image";
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
            sx={{ animationDelay: `${props.index * 50 + 550}ms` }}
            onClick={props.previewThisFeature}
        >
            <Image
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
