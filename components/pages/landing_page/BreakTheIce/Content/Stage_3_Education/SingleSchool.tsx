// Tools
import { styled, keyframes } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/intro/fadeFromBottom";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/Image";
// Material UI Icons
import AccessTime from "@mui/icons-material/AccessTime";

const dividerIntro = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 0.1,
    },
});

const SingleSchoolWrapper = styled("div")(({ theme }) => ({
    width: "calc(100% - 50px)",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    "&:not(&:nth-of-type(1))": {
        marginTop: "40px",
        "&::after": {
            content: "''",
            position: "absolute",
            top: "-20px",
            left: "0%",
            width: "75%",
            height: "2px",
            background: "#000",
            animation: `${dividerIntro} .5s 1.5s both`,
        },
    },
    "&:nth-of-type(1)": {
        animation: `${fadeFromLeft} .5s 1s both`,
    },
    "&:nth-of-type(2)": {
        animation: `${fadeFromLeft} .5s 1.1s both`,
    },
}));

const ImageWrapper = styled("div")(({ theme }) => ({
    width: "110px",
    height: "110px",
    padding: "5px",
    background: theme.palette.primary.main,
    borderRadius: "5px",
    position: "relative",
    border: `5px solid ${theme.palette.primary.main}`,
    img: {
        borderRadius: "5px",
    },
}));

const ContentWrapper = styled("div")(({ theme }) => ({
    width: "calc(100% - 120px - 20px)",
    display: "flex",
    flexDirection: "column",
}));

const Header = styled("h4")(({ theme }) => ({
    margin: 0,
    fontSize: "24px",
    fontFamily: "Montserrat Alternates",
}));

const Type = styled("span")(({ theme }) => ({
    fontSize: "18px",
    color: theme.palette.primary.main,
}));

const Date = styled("span")(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 300,
    display: "flex",
    alignItems: "center",
    svg: {
        fontSize: "16px",
        marginRight: "3px",
        opacity: 0.7,
    },
}));
const Description = styled("p")(({ theme }) => ({
    margin: 0,
    fontSize: "18px",
}));

interface SingleSchoolProps {
    end?: string;
    //
    type: string;
    title: string;
    start: string;
    schoolURL: string;
    description: string;
    thumbnailURL: string;
}

const SingleSchool: FunctionComponent<SingleSchoolProps> = (props) => {
    return (
        <SingleSchoolWrapper>
            <ContentWrapper>
                <Date>
                    <AccessTime />
                    {props.start}
                    {props.end ? ` - ${props.end}` : ""}
                </Date>
                <Header>{props.title}</Header>
                <Type>{props.type}</Type>
                <Description>{formatTextViaBolding(props.description)}</Description>
            </ContentWrapper>
            <a href={props.schoolURL} target="_blank" rel="noreferrer">
                <ImageWrapper>
                    <Image
                        alt={`${props.title}-thumbnail`} //
                        src={props.thumbnailURL}
                        layout="fill"
                    />
                </ImageWrapper>
            </a>
        </SingleSchoolWrapper>
    );
};

export default SingleSchool;
