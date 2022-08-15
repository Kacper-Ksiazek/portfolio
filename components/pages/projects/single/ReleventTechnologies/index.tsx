// Types
import type { FunctionComponent } from "react";
import type { ReleventTechnology } from "@/@types/prisma/Project";
// Other components
import Image from "next/Image";
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
// Styled components
import SingleTechnology from "./styled_components/SingleTechnology";
import ReleventTechnologiesBase from "./styled_components/ReleventTechnologiesBase";

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
