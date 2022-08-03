// Tools
import { styled, keyframes } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { ReleventTechnology } from "@/@types/prisma/Project";
// Other components
import Image from "next/Image";
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
import DarkWrapperBase from "@/components/_styled_components/content_placement/SectionWrapper/Dark/DarkWrapperBase";
// Styled components
const SingleTechnology = styled("div")(({ theme }) => ({
    position: "relative",
    width: "80px",
    height: "80px",
    "&:not(&:nth-of-type(1))": {
        marginLeft: "50px",
    },
}));

const fadeSimpleButWithSmallerOpacity = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 0.5,
    },
});

const ReleventTechnologiesBase = styled(DarkWrapperBase)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    "&.visible": {
        ".single-relevent-technology": {
            "&:nth-of-type(1)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .3s linear both`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .4s linear both`,
            },
            "&:nth-of-type(3)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .5s linear both`,
            },
            "&:nth-of-type(4)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .6s linear both`,
            },
            "&:nth-of-type(5)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .7s linear both`,
            },
            "&:nth-of-type(6)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .8s linear both`,
            },
            "&:nth-of-type(7)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s .9s linear both`,
            },
            "&:nth-of-type(8)": {
                animation: `${fadeSimpleButWithSmallerOpacity} .3s 1s linear both`,
            },
        },
    },
}));

interface ReleventTechnologiesProps {
    techStack: ReleventTechnology[];
}

const ReleventTechnologies: FunctionComponent<ReleventTechnologiesProps> = (props) => {
    return (
        <VisibilitySensor>
            <ReleventTechnologiesBase>
                {props.techStack.map((item, index) => {
                    return (
                        <SingleTechnology
                            key={item} //
                            className="single-relevent-technology"
                        >
                            <Image
                                alt={item}
                                layout="fill" //
                                objectFit="contain"
                                src={`/images/technologies/white/${item}.png`}
                            />
                        </SingleTechnology>
                    );
                })}
            </ReleventTechnologiesBase>
        </VisibilitySensor>
    );
};

export default ReleventTechnologies;
