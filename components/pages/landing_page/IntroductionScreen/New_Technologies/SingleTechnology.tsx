// Tools
import { styled } from "@mui/system";
// Types
import type { ReleventTechnology } from "@/@types/prisma/Project";
import type { FunctionComponent } from "react";
// Other components
import Image from "next/Image";
// Styled components
const SingleTechnologyBase = styled("div")(({ theme }) => ({
    position: "relative",
    opacity: 0.35,
    cursor: "pointer",
    filter: "grayscale(1)",
    "&:not(&:nth-of-type(1))": {
        marginTop: "72px",
    },
    "&:hover": {
        opacity: 1,
        filter: "grayscale(0)",
    },
}));
interface SingleTechnologyProps {
    icon: ReleventTechnology;
}

const SingleTechnology: FunctionComponent<SingleTechnologyProps> = ({ icon }) => {
    return (
        <SingleTechnologyBase className="technology">
            <Image
                layout="fill" //
                alt={icon}
                objectFit="contain"
                src={`/images/technologies/pink/${icon}.png`}
            />
        </SingleTechnologyBase>
    );
};

export default SingleTechnology;
