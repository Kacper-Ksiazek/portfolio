// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Icons
import Loyalty from "@mui/icons-material/Loyalty";
// Other components
import Image from "next/Image";
// Styled components
import SingleHobbyWrapper from "./styled_components/SingleHobbyWrapper";
import ImageWrapper from "./styled_components/ImageWrapper";

const Label = styled("span")(({ theme }) => ({
    margin: "0 0 5px 0",
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: 500,
    svg: {
        marginRight: "3px",
    },
}));

const Header = styled("h4")(({ theme }) => ({
    margin: "4px 0 4px 0 ",
    fontFamily: "Montserrat Alternates",
    fontSize: "24px",
}));

const Description = styled("p")(({ theme }) => ({
    margin: "0",
}));

const Reference = styled("a")(({ theme }) => ({
    position: "absolute",
    bottom: "5px",
    right: "5px",
    zIndex: 2,
    cursor: "pointer",
    svg: {
        color: theme.palette.primary.main,
    },
}));

interface SingleHobbyProps {
    label: string;
    icon: ReactNode;
    name: string;
    description: string;
    thumbnailURL: string;
    //
    thumbnailReferenceURL?: string;
}

const SingleHobby: FunctionComponent<SingleHobbyProps> = (props) => {
    return (
        <SingleHobbyWrapper>
            <Label className="label">
                {props.icon} {props.label}
            </Label>
            <ImageWrapper className="image-wrapper">
                {props.thumbnailReferenceURL && (
                    <Reference href={props.thumbnailReferenceURL} target="_blank" rel="noreferrer" tabIndex={-1}>
                        <Loyalty />
                    </Reference>
                )}
                <Image
                    alt={`${props.name}-thumbnail`} //
                    layout="fill"
                    src={props.thumbnailURL}
                    priority
                />
            </ImageWrapper>
            <Header>{props.name}</Header>
            <Description>{props.description}</Description>
        </SingleHobbyWrapper>
    );
};

export default SingleHobby;
