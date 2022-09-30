// Tools
import dynamic from "next/dynamic";
import getHobbyIcon from "@/utils/client/getHobbyIcon";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import { uploadedHobbyImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/hobby";
// Types
import type { Hobby } from "@prisma/client";
import type { FunctionComponent } from "react";
// Other components
import Image from "next/image";
const ArtistReference = dynamic(() => import("./ArtistReference"));
// Styled components
import ImageWrapper from "./styled_components/ImageWrapper";
import { Description, Header, Label } from "./styled_components/atoms";
import SingleHobbyWrapper from "./styled_components/SingleHobbyWrapper";

interface SingleHobbyProps {
    data: Hobby;
}

const SingleHobby: FunctionComponent<SingleHobbyProps> = ({ data }) => {
    return (
        <SingleHobbyWrapper>
            <Label className="label">
                {getHobbyIcon(data.icon)} {data.label}
            </Label>
            <ImageWrapper className="image-wrapper">
                {data.artistReferenceURL && (
                    <ArtistReference
                        url={data.artistReferenceURL} //
                        tooltip={data.artistReferenceTooltip ?? undefined}
                    />
                )}

                <Image
                    alt={`${data.title}-thumbnail`} //
                    layout="fill"
                    src={uploadedHobbyImageURLBuilder(data.folder)}
                    priority
                />
            </ImageWrapper>
            <Header>{data.title}</Header>
            <Description>{formatTextViaBolding(data.description, true)}</Description>
        </SingleHobbyWrapper>
    );
};

export default SingleHobby;
