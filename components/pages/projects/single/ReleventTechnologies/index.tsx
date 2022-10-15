// Tools
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
// Types
import type { FunctionComponent } from "react";
import type { ReleventTechnology } from "@/@types/prisma/Project";
// Other components
import Image from "next/image";
import VisibilitySensor from "@/components/utils/VisibilitySensor";
// Styled components
import { Background, SingleTechnology, ReleventTechnologiesBase } from "./styled_components";

interface ReleventTechnologiesProps {
    techStack: ReleventTechnology[];
}

const ReleventTechnologies: FunctionComponent<ReleventTechnologiesProps> = (props) => {
    useLazyLoadedImages({
        id: "RELEVENT_TECHNOLOGY",
        srcsToLazyLoad: props.techStack.map((technology) => `/images/technologies/white/${technology}.png`),
    });

    return (
        <VisibilitySensor offsetBottom={50}>
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
        </VisibilitySensor>
    );
};

export default ReleventTechnologies;
