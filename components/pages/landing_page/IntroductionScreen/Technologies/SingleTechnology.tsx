// Tools
import { styled } from "@mui/system";
import { useLandingScreenTechnologiesContext } from "./hooks/useLandingScreenTechnologiesContext";
// Types
import type { FunctionComponent } from "react";
import type { ReleventTechnology } from "@/@types/prisma/Project";
// Styled components

const SingleTechnologyBase = styled("div")(({ theme }) => ({
    position: "relative",
    color: theme.palette.primary.main,
    "&:not(&:nth-of-type(1))": {
        marginTop: "72px",
    },
}));

const IconWrapper = styled("div", {
    shouldForwardProp: (prop: string) => !["icon"].includes(prop),
})<{ icon: string }>(({ theme, ...props }) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundImage: `url("/images/technologies/white/${props.icon}.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    transition: "background-image .2s linear, opacity .3s linear",
    opacity: 0.2,
    "&:not(&.block-interactions)": {
        cursor: "pointer",
        "&:hover": {
            opacity: 0.7,
        },
        "&.alreadyClicked": {
            opacity: 0.7,
            cursor: "default",
            backgroundImage: `url("/images/technologies/pink/${props.icon}.png")`,
        },
    },
}));

interface SingleTechnologyProps {
    icon: ReleventTechnology;
}

const SingleTechnology: FunctionComponent<SingleTechnologyProps> = ({ icon }) => {
    const { markIconAsMarked, isAlreadyClicked, blockInteractions } = useLandingScreenTechnologiesContext();

    const iconHasBeenAlreadyClicked = isAlreadyClicked(icon);

    const onClick = () => {
        if (iconHasBeenAlreadyClicked || blockInteractions) return;
        markIconAsMarked(icon);
    };

    return (
        <SingleTechnologyBase
            className={[
                "technology", //
            ].join(" ")}
            onClick={onClick}
            role="button"
        >
            <IconWrapper
                className={[
                    "icon-wrapper", //
                    iconHasBeenAlreadyClicked ? "alreadyClicked" : "",
                    blockInteractions ? "block-interactions" : "",
                ].join(" ")}
                icon={icon}
            />
        </SingleTechnologyBase>
    );
};

export default SingleTechnology;
