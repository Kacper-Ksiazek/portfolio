// Tools
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import uploadedSchoolImageURLBuilder from "@/utils/client/uploaded_image_url_builder/school";
// Types
import type { School } from "@prisma/client";
import type { FunctionComponent } from "react";
// Other components
import Image from "next/Image";
// Material UI Icons
import AccessTime from "@mui/icons-material/AccessTime";
// Styled components
import ImageWrapper from "./styled_components/ImageWrapper";
import ContentWrapper from "./styled_components/ContentWrapper";
import SingleSchoolBase from "./styled_components/SingleSchoolBase";
import { Date, Description, Header, Type } from "./styled_components/atoms";

interface SingleSchoolProps {
    data: School;
}

const SingleSchool: FunctionComponent<SingleSchoolProps> = ({ data }) => {
    const formatSchoolType = (school: string): string => {
        return (school[0] + school.slice(1).toLowerCase()).replaceAll("_", " ");
    };

    return (
        <SingleSchoolBase>
            <ContentWrapper className="single-school-content-wrapper">
                <Date>
                    <AccessTime />
                    {data.start}
                    {data.end ? ` - ${data.end}` : ""}
                </Date>
                <Header>{data.title}</Header>
                <Type>{formatSchoolType(data.type)}</Type>
                <Description>{formatTextViaBolding(data.description)}</Description>
            </ContentWrapper>
            <a href={data.url} target="_blank" rel="noreferrer">
                <ImageWrapper>
                    <Image
                        alt={`${data.title}-thumbnail`} //
                        src={uploadedSchoolImageURLBuilder(data.folder)}
                        layout="fill"
                    />
                </ImageWrapper>
            </a>
        </SingleSchoolBase>
    );
};

export default SingleSchool;
