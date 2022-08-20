// Tools
import getHobbyIcon from "@/utils/client/getHobbyIcon";
import uploadedHobbyImageURLBuilder from "@/utils/client/uploaded_image_url_builder/hobby";
// Types
import type { Hobby } from "@prisma/client";
import type { FunctionComponent } from "react";
// Material UI Icons
import Loyalty from "@mui/icons-material/Loyalty";
// Other components
import Image from "next/Image";
// Styled components
import ImageWrapper from "./styled_components/ImageWrapper";
import SingleHobbyWrapper from "./styled_components/SingleHobbyWrapper";
import { Description, Header, Label, Reference } from "./styled_components/atoms";

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
                {data.thumbnailReferenceURL && (
                    <Reference href={data.thumbnailReferenceURL} target="_blank" rel="noreferrer" tabIndex={-1}>
                        <Loyalty />
                    </Reference>
                )}
                <Image
                    alt={`${data.title}-thumbnail`} //
                    layout="fill"
                    src={uploadedHobbyImageURLBuilder(data.id)}
                    priority
                />
            </ImageWrapper>
            <Header>{data.title}</Header>
            <Description>{data.description}</Description>
        </SingleHobbyWrapper>
    );
};

export default SingleHobby;
