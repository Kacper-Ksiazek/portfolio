// Tools
import { useState } from "react";
import dynamic from "next/dynamic";
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { Feature } from "@/@types/prisma/Project";
// Other components
import SingleFeature from "./SingleFeature";
const ImageModalWrapper = dynamic(() => import("./ImageModalWrapper"));
// Styled components
const FeaturesListBase = styled("section")(({ theme }) => ({
    background: theme.palette.background.default,
    display: "flex",
    flexWrap: "wrap",
}));

interface FeaturesListProps {
    features: Feature[];
    folder: string;
}

const FeaturesList: FunctionComponent<FeaturesListProps> = (props) => {
    const [indexOfFeatureToPreview, setIndexOfFeatureToPreview] = useState<number | null>(null);

    return (
        <>
            <FeaturesListBase>
                {props.features.slice(0, 5).map((feature, index) => {
                    return (
                        <SingleFeature
                            key={feature.imageURL} //
                            folder={props.folder}
                            imageURL={feature.imageURL}
                            index={index}
                            previewThisFeature={() => setIndexOfFeatureToPreview(index)}
                        />
                    );
                })}
            </FeaturesListBase>

            {(() => {
                if (indexOfFeatureToPreview !== null) {
                    return (
                        <ImageModalWrapper
                            changeIndexOfFeatureToPreview={setIndexOfFeatureToPreview} //
                            indexOfFeatureToPreview={indexOfFeatureToPreview}
                            features={props.features}
                            folder={props.folder}
                        />
                    );
                }
            })()}
        </>
    );
};

export default FeaturesList;
