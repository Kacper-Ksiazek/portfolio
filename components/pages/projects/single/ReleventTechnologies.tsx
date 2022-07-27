// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { ReleventTechnology } from "@/@types/prisma/Project";
// Other components
import Image from "next/Image";
import DarkWrapperBase from "@/components/_styled_components/content_placement/SectionWrapper/Dark/DarkWrapperBase";
// Styled components
const SingleTechnology = styled("div")(({ theme }) => ({
    position: "relative",
    width: "80px",
    height: "80px",
    opacity: 0.75,
    "&:not(&:nth-of-type(1))": {
        marginLeft: "50px",
    },
}));

interface ReleventTechnologiesProps {
    techStack: ReleventTechnology[];
}

const ReleventTechnologies: FunctionComponent<ReleventTechnologiesProps> = (props) => {
    return (
        <DarkWrapperBase sx={{ display: "flex", justifyContent: "center" }}>
            {props.techStack.map((item, index) => {
                return (
                    <SingleTechnology key={item}>
                        <Image
                            alt={item}
                            layout="fill" //
                            objectFit="contain"
                            src={`/images/technologies/white/${item}.png`}
                        />
                    </SingleTechnology>
                );
            })}
        </DarkWrapperBase>
    );
};

export default ReleventTechnologies;
