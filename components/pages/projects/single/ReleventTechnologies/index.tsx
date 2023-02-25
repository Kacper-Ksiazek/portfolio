// Tools
import { keyframes } from "@mui/material";
import { repeat } from "@/utils/client/styled/repeat";
import { fadeSimple } from "@/components/keyframes/intro";
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
// Types
import type { FunctionComponent } from "react";
import type { ReleventTechnology } from "@/@types/prisma/Project";
// Other components
import Image from "next/image";
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled components
import { Background, SingleTechnology, ReleventTechnologiesBase } from "./styled_components";

const fadeSimpleButWithSmallerOpacity = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 0.5,
    },
});

interface ReleventTechnologiesProps {
    techStack: ReleventTechnology[];
}

const ReleventTechnologies: FunctionComponent<ReleventTechnologiesProps> = (props) => {
    useLazyLoadedImages({
        id: "RELEVENT_TECHNOLOGY",
        srcsToLazyLoad: props.techStack.map((technology) => `/images/technologies/white/${technology}.png`),
    });

    return (
        <TransformWhenVisible
            to={{
                "#relevent-technologies-background": {
                    animation: `${fadeSimple} 2s .1s both linear`,
                },
                ".single-relevent-technology": repeat(10, (index) => ({
                    [`&:nth-of-type(${index + 1})`]: {
                        animation: `${fadeSimpleButWithSmallerOpacity} .3s ${0.3 + index * 0.1}s linear both`,
                    },
                })),
            }}
        >
            <ReleventTechnologiesBase>
                <Background id="relevent-technologies-background" />
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
                                unoptimized
                            />
                        </SingleTechnology>
                    );
                })}
            </ReleventTechnologiesBase>
        </TransformWhenVisible>
    );
};

export default ReleventTechnologies;
