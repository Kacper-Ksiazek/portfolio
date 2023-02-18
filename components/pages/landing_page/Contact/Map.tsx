// Tools
import { styled } from "@mui/system";
import useWindowSizes from "@/hooks/useWindowSizes";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { FunctionComponent } from "react";
import type { GeneralContactSection, EmailFormSubsection } from "./@types";
// Styled components
const MapBase = styled("span")(({ theme }) => ({
    width: "50%",
    animation: `${fadeSimple} .3s .7s linear both`,
    height: "100%",
    position: "absolute",
    zIndex: 1,
    right: "0",
    top: 0,
    backgroundImage: `url("/images/landing-page/europe_map/${theme.palette.mode}/blank.png")`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    transition: "background-image .5s linear, width 1.2s, transform .6s",
    "&::after": {
        content: '""',
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        backgroundImage: 'url("/images/landing-page/europe_map/poland/simple.png")',
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        animation: `${fadeSimple} .3s 2s linear forward`,
        transition: "background-image .5s",
    },
    "&.SEND_EMAIL_FORM": {
        width: "70%",
        transform: "scale(1.2)",
        "&.CONTACT_DETAILS": {
            transform: "scale(1.3)",
        },
        "&.success": {
            transform: "scale(1.6)",
            transition: "background-image .5s .6s linear, width 1.2s, transform .6s",
            backgroundImage: `url("/images/landing-page/europe_map/${theme.palette.mode}/success.png")`,
            "&::after": {
                backgroundImage: 'url("/images/landing-page/europe_map/poland/success.png")',
            },
        },
        "&.error": {
            transform: "scale(1.6)",
            transition: "background-image .5s .6s linear, width 1.2s, transform .6s",
            backgroundImage: `url("/images/landing-page/europe_map/${theme.palette.mode}/error.png")`,
            "&::after": {
                backgroundImage: 'url("/images/landing-page/europe_map/poland/error.png")',
            },
        },
    },
    "@media (max-width:1300px)": {
        width: "60%",
    },
    "@media (max-width:1000px)": {
        width: "80%",
    },
}));

interface MapProps {
    status: "success" | "error" | null;
    emailFormSubsection: EmailFormSubsection;
    currentGeneralSection: GeneralContactSection;
}

const Map: FunctionComponent<MapProps> = (props) => {
    const { width } = useWindowSizes();

    if (width < 800) return <></>;
    return (
        <MapBase
            id="map"
            className={[
                props.status ?? "", //
                props.currentGeneralSection,
                props.emailFormSubsection,
            ].join(" ")}
        >
            <span></span>
        </MapBase>
    );
};

export default Map;
