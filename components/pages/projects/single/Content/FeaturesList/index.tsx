// Tools
import { useState } from "react";
import dynamic from "next/dynamic";
import { useFeatureListManagement } from "./hooks/useFeatureListManagement";
// Types
import type { FunctionComponent } from "react";
import type { Feature } from "@/@types/prisma/Project";
// Other components
import ShowMore from "./ShowMore";
import SingleFeature from "./SingleFeature";
import AnimationsWhenVisibleWrapper from "./AnimationsWhenVisibleWrapper";
const FeatureThumbnailModal = dynamic(() => import("./FeatureThumbnailModal"));
// Styled components
import FeaturesWrapper from "./styled_components/FeaturesWrapper";

interface FeaturesListProps {
    features: Feature[];
    folder: string;
}

const FeaturesList: FunctionComponent<FeaturesListProps> = (props) => {
    const [indexOfFeatureToPreview, setIndexOfFeatureToPreview] = useState<number | null>(null);
    const { wrapperExtraCSS, allFeaturesAreShown, featuresAnimation, featuresToDisplay, showLess, showMore } = useFeatureListManagement(props.features, "features-wrapper");

    return (
        <>
            <AnimationsWhenVisibleWrapper>
                <FeaturesWrapper className={featuresAnimation} sx={wrapperExtraCSS} id="features-wrapper">
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
                    allFeaturesAreShown={allFeaturesAreShown} //
                    showMore={showMore}
                    showLess={showLess}
                />
            </AnimationsWhenVisibleWrapper>

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
