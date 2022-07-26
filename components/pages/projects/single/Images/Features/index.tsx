// Tools
import { useEffect, useState } from "react";
import uploadedProjectImageURLBuilder from "@/utils/client/uploaded_image_url_builder/project";
import useImagesWrapperContext from "@/components/pages/projects/single/Images/hooks/useImagesWrapperContext";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import SingleFeature from "./SingleFeature";
import ImageModal from "@/components/_utils/ImageModel";
import OverflowScrollDiv from "@/components/_styled_components/content_placement/OverflowScrollDiv";
// Styled Components
import FeaturesWrapperBase from "./styled_components/FeaturesWrapperBase";

const FeaturesWrapper: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const context = useImagesWrapperContext();
    const [animationCSSClass, setAnimationCSSClass] = useState<"intro" | "outro" | null>(null);

    useEffect(() => {
        if (context.openBrowseFeatures && animationCSSClass !== "intro") {
            setAnimationCSSClass("intro");
        } else if (!context.openBrowseFeatures && animationCSSClass === "intro") {
            setAnimationCSSClass("outro");
        }
    }, [context.openBrowseFeatures, animationCSSClass]);

    return (
        <FeaturesWrapperBase className={`${animationCSSClass}`}>
            {(() => {
                if (context.indexOfFeatureToDisplay !== null) {
                    const currentFeature = context.features[context.indexOfFeatureToDisplay];
                    return (
                        <ImageModal
                            open={true} //
                            onClose={() => context.setIndexOfFeatureToDisplay(null)}
                            imageURL={uploadedProjectImageURLBuilder({
                                subject: currentFeature.imageURL,
                                folder: context.folder,
                                resolution: "fullsize",
                            })}
                            title={currentFeature.title}
                            gallery={{
                                imagesInTotal: context.features.length,
                                currentIndex: context.indexOfFeatureToDisplay,
                                setCurrentImageIndex: context.setIndexOfFeatureToDisplay as any,
                            }}
                        />
                    );
                }
            })()}
            <OverflowScrollDiv id="features-overflow-hidden-container">
                {context.features.map(({ imageURL }, index) => {
                    return (
                        <SingleFeature
                            key={index} //
                            index={index}
                            folder={context.folder}
                            imageURL={imageURL}
                            previewThisFeature={() => context.setIndexOfFeatureToDisplay(index)}
                        ></SingleFeature>
                    );
                })}
            </OverflowScrollDiv>
        </FeaturesWrapperBase>
    );
};

export default FeaturesWrapper;
