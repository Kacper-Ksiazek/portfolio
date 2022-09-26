// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
const PodiumPlaceWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "390px",
    width: "200px",
    "&:not(&:nth-of-type(1))": {
        marginLeft: "16px",
    },
    ".podium-place-base": {
        width: "100%",
        background: "#7B6F82",
        borderRadius: "24px 24px 4px 4px",
    },
    ".trophy-wrapper": {
        position: "relative",
        transform: "translateY(24px)",
    },
    "&:not(&.gold)": {
        svg: {
            opacity: 0.74,
        },
    },
    "&.gold": {
        width: "260px",
        ".podium-place-base": {
            height: "64px",
        },
    },
    "&.silver": {
        ".podium-place-base": {
            height: "56px",
        },
    },
    "&.bronze": {
        ".podium-place-base": {
            height: "40px",
        },
    },
}));

interface PodiumPlaceProps {
    children: ReactNode;
    place: "gold" | "silver" | "bronze";
}

const PodiumPlace: FunctionComponent<PodiumPlaceProps> = (props) => {
    return (
        <PodiumPlaceWrapper className={[props.place, "podium-place"].join(" ")}>
            <div className="trophy-wrapper">{props.children}</div>
            <div className="podium-place-base"></div>
        </PodiumPlaceWrapper>
    );
};

export default PodiumPlace;
