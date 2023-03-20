// Tools
import dynamic from "next/dynamic";
import { styled, alpha } from "@mui/material";
import { useState, useRef } from "react";
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

const RemainingPictures = styled("span")(({ theme }) => ({
    position: "absolute",
    ...theme.mixins.absolute_full,
    ...theme.mixins.flex_center,
    background: alpha("#000", 0.4),
    backdropFilter: "blur(3px)",
    fontSize: "28px",
    fontFamily: "Montserrat Alternates",
    color: "#fff",
    fontWeight: 500,
    strong: {
        fontWeight: 700,
        padding: "2px 6px",
        borderRadius: "3px",
        background: theme.palette.primary.main,
    },
    transition: "opacity .2s",
    ".text": {
        transition: "opacity .2s .3s",
    },
    "&.hide": {
        transition: "opacity .2s .2s",
        opacity: 0,
        ".text": {
            opacity: 0,
        },
    },
}));

const FeaturesList: FunctionComponent<FeaturesListProps> = (props) => {
    const featuresWrapper = useRef<HTMLDivElement | null>(null);
    const [indexOfFeatureToPreview, setIndexOfFeatureToPreview] = useState<number | null>(null);
    const { wrapperExtraCSS, allFeaturesAreShown, featuresAnimation, featuresToDisplay, amountOfFeaturesInOneRow, showLess, showMore } = useFeatureListManagement(props.features, featuresWrapper);

    return (
        <>
            <AnimationsWhenVisibleWrapper>
                <FeaturesWrapper className={featuresAnimation} sx={wrapperExtraCSS} id="features-wrapper" ref={featuresWrapper}>
                    {featuresToDisplay.map((feature, index) => {
                        const isLast: boolean = index == amountOfFeaturesInOneRow - 1;

                        function onClick() {
                            if (isLast && !allFeaturesAreShown) {
                                showMore();
                            } else {
                                setIndexOfFeatureToPreview(index);
                            }
                        }

                        return (
                            <SingleFeature
                                key={feature.imageURL} //
                                folder={props.folder}
                                imageURL={feature.imageURL}
                                index={index}
                                onClick={onClick}
                            >
                                {isLast && (
                                    <RemainingPictures className={allFeaturesAreShown ? "hide" : "unhide"}>
                                        <span className="text">
                                            <strong>{props.features.length - amountOfFeaturesInOneRow}</strong> more
                                        </span>
                                    </RemainingPictures>
                                )}
                            </SingleFeature>
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
