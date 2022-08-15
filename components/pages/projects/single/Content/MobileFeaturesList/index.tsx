// Tools
import { useState } from "react";
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent } from "react";
import type { Feature } from "@/@types/prisma/Project";
// Other components
import SingleFeature from "../atoms/SingleFeature";
import { Header, Paragraph } from "../styled_components/Text";
const ImageModalWrapper = dynamic(() => import("./ImageModalWrapper"));
// Styled components
import { PrimaryStrong, MobileFeaturesListBase } from "./_styled.components";

interface MobileFeaturesListProps {
    features: Feature[];
    folder: string;
}

const MobileFeaturesList: FunctionComponent<MobileFeaturesListProps> = (props) => {
    const { length: numberOfProjects } = props.features;

    const [indexOfFeatureToPreview, setIndexOfFeatureToPreview] = useState<number | null>(null);

    return (
        <>
            <Header>Features</Header>
            <Paragraph sx={{ mb: "16px" }}>
                This particular project includes <PrimaryStrong>{numberOfProjects}</PrimaryStrong> features in total.
            </Paragraph>

            <MobileFeaturesListBase>
                {props.features.map((feature, index) => {
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
            </MobileFeaturesListBase>

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

export default MobileFeaturesList;
