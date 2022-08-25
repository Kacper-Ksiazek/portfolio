// Tools
import { styled } from "@mui/system";
import { uploadedPreviousJobImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/previous_job";
// Types
import type { FunctionComponent } from "react";
import type { PreviousJob } from "@/@types/pages/LandingPage";
// Other components
import Image from "next/Image";
import Localization from "./Localization";
import Duration from "@/components/pages/_shared/single-project/Duration";
// Styled components
import TextWrapper from "./styled_components/TextWrapper";
import { Description, Header } from "./styled_components/atoms";
import ThumbnailWrapper from "./styled_components/ThumbnailWrapper";
import SinglePreviousJobBase from "./styled_components/SinglePreviousJobBase";

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
            </TextWrapper>
        </SinglePreviousJobBase>
    );
};

export default SinglePreviousJob;
