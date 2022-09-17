// Tools
import dynamic from "next/dynamic";
import { useState, useMemo } from "react";
// Types
import type { FunctionComponent } from "react";
import type { Feature } from "@/@types/prisma/Project";
// Other components
import ShowMore from "./ShowMore";
import SingleFeature from "./SingleFeature";
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
const FeatureThumbnailModal = dynamic(() => import("./FeatureThumbnailModal"));
// Styled components
import FeaturesWrapper from "./styled_components/FeaturesWrapper";
import FeaturesListBase from "./styled_components/FeaturesListBase";

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
            <VisibilitySensor>
                <FeaturesListBase>
                    <FeaturesWrapper className={featuresAnimation}>
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
                    </FeaturesWrapper>

                    <ShowMore
                        allFeaturesAreDisplayed={displayAllFeatures} //
                        showMore={showMore}
                        showLess={showLess}
                    />
                </FeaturesListBase>
            </VisibilitySensor>

            {(() => {
                if (indexOfFeatureToPreview !== null) {
                    return (
                        <FeatureThumbnailModal
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
