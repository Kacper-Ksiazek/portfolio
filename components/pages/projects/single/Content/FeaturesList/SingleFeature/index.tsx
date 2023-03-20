// Tools
import { uploadedProjectImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/project";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import NextImageWithSkeleton from "@/components/atoms/NextImageWithSkeleton";
// Styled components
import SingleFeatureBase from "./SingleFeatureBase";

interface SingleFeatureProps {
    index: number;
    folder: string;
    imageURL: string;
    children?: ReactNode;

    onClick: () => void;
}

const SingleFeature: FunctionComponent<SingleFeatureProps> = (props) => {
    return (
        <SingleFeatureBase
            className="single-feature" //
            onClick={props.onClick}
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
            {props.children && props.children}
        </SingleFeatureBase>
    );
};

export default SingleFeature;
