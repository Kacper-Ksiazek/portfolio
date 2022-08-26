// Tools
import { uploadedPreviousJobImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/previous_job";
// Types
import type { FunctionComponent } from "react";
import type { PreviousJob } from "@/@types/pages/LandingPage";
// Other components
import Image from "next/Image";
import Localization from "./Localization";
import Duration from "@/components/pages/_shared/single-project/Duration";
// Styled components
import Redirection from "@/components/_styled_components/Redirection";
import TextWrapper from "./styled_components/TextWrapper";
import ThumbnailWrapper from "./styled_components/ThumbnailWrapper";
import SinglePreviousJobBase from "./styled_components/SinglePreviousJobBase";
import { Description, Header, RedirectionsWrapper } from "./styled_components/atoms";

interface SinglePreviousJobProps {
    data: PreviousJob;
    hoverable: boolean;
}

const SinglePreviousJob: FunctionComponent<SinglePreviousJobProps> = ({ data, ...props }) => {
    return (
        <SinglePreviousJobBase className={props.hoverable ? "hoverable" : ""}>
            <ThumbnailWrapper className="single-previous-job-thumbnail-wrapper">
                <Image
                    alt={`${data.title}-thumbnail`} //
                    src={uploadedPreviousJobImageURLBuilder(data.folder)}
                    layout="fill"
                />
            </ThumbnailWrapper>
            <TextWrapper>
                <Localization city={data.city ?? undefined} country={data.country} />
                <Header>{data.title}</Header>
                <Duration smaller start={data.start} end={data.end} />
                <Description>{data.description}</Description>

                {(() => {
                    if (data.projectPortfolioURL) {
                        return (
                            <RedirectionsWrapper>
                                <Redirection
                                    url={data.projectPortfolioURL} //
                                    tooltip="Go to this project's site"
                                >
                                    Read more
                                </Redirection>
                            </RedirectionsWrapper>
                        );
                    }
                })()}
            </TextWrapper>
        </SinglePreviousJobBase>
    );
};

export default SinglePreviousJob;
