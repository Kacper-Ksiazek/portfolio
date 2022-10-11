// Tools
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
// Types
import type { FunctionComponent } from "react";
import type { ReleventTechnology } from "@/@types/prisma/Project";
// Other components
import Image from "next/image";
import VisibilitySensor from "@/components/utils/VisibilitySensor";
// Styled components
import SingleTechnology from "./styled_components/SingleTechnology";
import ReleventTechnologiesBase from "./styled_components/ReleventTechnologiesBase";

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
