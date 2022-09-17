// Tools
import dynamic from "next/dynamic";
import { useState, useMemo } from "react";
// Types
import type { FunctionComponent } from "react";
import type { Feature } from "@/@types/prisma/Project";
// Other components
import ShowMore from "./ShowMore";
import SingleFeature from "./SingleFeature";
const ImageModalWrapper = dynamic(() => import("./ImageModalWrapper"));
// Styled components
import FeaturesListBase from "./FeaturesListBase";

interface FeaturesListProps {
    features: Feature[];
    folder: string;
}

const FeaturesList: FunctionComponent<FeaturesListProps> = (props) => {
    const [indexOfFeatureToPreview, setIndexOfFeatureToPreview] = useState<number | null>(null);
    const [displayAllFeatures, setDisplayAllFeatures] = useState<boolean>(false);
    const [featuresAnimation, setFeaturesAnimation] = useState<"features-intro" | "features-outro">("features-outro");

    const featuresToDisplay = useMemo<Feature[]>(() => {
        return displayAllFeatures ? props.features : props.features.slice(0, 5);
    }, [displayAllFeatures, props.features]);

    const showMore = () => {
        setFeaturesAnimation("features-intro");
        setDisplayAllFeatures(true);
    };
    const showLess = () => {
        setFeaturesAnimation("features-outro");
        setTimeout(() => setDisplayAllFeatures(false), 501);
    };

    return (
        <>
            <FeaturesListBase className={featuresAnimation}>
                {featuresToDisplay.map((feature, index) => {
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

            <ShowMore
                allFeaturesAreDisplayed={displayAllFeatures} //
                showMore={showMore}
                showLess={showLess}
            />

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
