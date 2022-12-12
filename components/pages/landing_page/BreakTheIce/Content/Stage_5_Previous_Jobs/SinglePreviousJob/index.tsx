// Tools
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import { uploadedPreviousJobImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/previous_job";
// Types
import type { FunctionComponent } from "react";
import type { PreviousJob } from "@/@types/pages/LandingPage";
// Other components
import Localization from "./Localization";
import ITRelatedJobIconBase from "./ITRelatedJobIcon";
import Duration from "@/components/atoms/single_project/Duration";
import NextImageWithSkeleton from "@/components/atoms/NextImageWithSkeleton";
// Styled components
import TextWrapper from "./styled_components/TextWrapper";
import ThumbnailWrapper from "./styled_components/ThumbnailWrapper";
import SinglePreviousJobBase from "./styled_components/SinglePreviousJobBase";
import { Description, Header, RedirectionsWrapper } from "./styled_components/atoms";
import ExternalRedirection from "@/components/atoms/redirections/ExternalRedirection";

interface SinglePreviousJobProps {
    data: PreviousJob;
    hoverable: boolean;
}

const SinglePreviousJob: FunctionComponent<SinglePreviousJobProps> = ({ data, ...props }) => {
    return (
        <SinglePreviousJobBase className={props.hoverable ? "hoverable" : ""}>
            <ThumbnailWrapper className="single-previous-job-thumbnail-wrapper">
                <NextImageWithSkeleton
                    alt={`${data.title}-thumbnail`} //
                    src={uploadedPreviousJobImageURLBuilder(data.folder)}
                    layout="fill"
                />
                {data.projectGithubURL && <ITRelatedJobIconBase />}
            </ThumbnailWrapper>
            <TextWrapper>
                <Localization city={data.city ?? undefined} country={data.country} />
                <Header>{data.title}</Header>
                <Duration smaller start={data.start} end={data.end} />
                <Description>{formatTextViaBolding(data.description)}</Description>

                {(() => {
                    if (data.projectPortfolioURL) {
                        return (
                            <RedirectionsWrapper>
                                <ExternalRedirection
                                    url={data.projectPortfolioURL} //
                                    tooltip="See more details about this project"
                                    small
                                >
                                    Read more
                                </ExternalRedirection>
                            </RedirectionsWrapper>
                        );
                    }
                })()}
            </TextWrapper>
        </SinglePreviousJobBase>
    );
};

export default SinglePreviousJob;
