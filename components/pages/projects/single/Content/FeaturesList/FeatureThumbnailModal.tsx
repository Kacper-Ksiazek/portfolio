// Tools
import { uploadedProjectImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/project";
// Types
import type { Feature } from "@/@types/prisma/Project";
import type { Dispatch, SetStateAction, FunctionComponent } from "react";
// Other components
import ImageModal from "@/components/utils/ImageModel";

interface ImageModelWrapperProps {
    features: Feature[];
    folder: string;
    indexOfFeatureToPreview: number;
    changeIndexOfFeatureToPreview: Dispatch<SetStateAction<number | null>>;
}

const ImageModelWrapper: FunctionComponent<ImageModelWrapperProps> = (props) => {
    const { features, changeIndexOfFeatureToPreview, indexOfFeatureToPreview } = props;
    const currentFeature = features[indexOfFeatureToPreview];

    return (
        <ImageModal
            open={true} //
            onClose={() => props.changeIndexOfFeatureToPreview(null)}
            imageURL={uploadedProjectImageURLBuilder({
                subject: currentFeature.imageURL,
                folder: props.folder,
                resolution: "fullsize",
            })}
            title={currentFeature.title}
            gallery={{
                imagesInTotal: features.length,
                currentIndex: indexOfFeatureToPreview,
                setCurrentImageIndex: changeIndexOfFeatureToPreview as any,
            }}
        />
    );
};

export default ImageModelWrapper;
