// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { FunctionComponent } from "react";
// Styled components
const MapBase = styled("span")(({ theme }) => ({
    width: "60%",
    animation: `${fadeSimple} .3s .7s linear both`,
    height: "100%",
    position: "absolute",
    zIndex: 1,
    right: "0",
    top: 0,
    backgroundImage: 'url("/images/landing-page/europe_map/light/blank.png")',
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    transition: "background-image .5s linear",
    "&::after": {
        content: '""',
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        backgroundImage: 'url("/images/landing-page/europe_map/poland/simple.png")',
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        animation: `${fadeSimple} .3s 2s linear forward`,
        transition: "background-image .5s",
    },
    "&.success": {
        transition: "background-image .5s .6s linear",
        backgroundImage: 'url("/images/landing-page/europe_map/light/success.png")',
        "&::after": {
            backgroundImage: 'url("/images/landing-page/europe_map/poland/success.png")',
        },
    },
    "&.error": {
        transition: "background-image .5s .6s linear",
        backgroundImage: 'url("/images/landing-page/europe_map/light/error.png")',
        "&::after": {
            backgroundImage: 'url("/images/landing-page/europe_map/poland/error.png")',
        },
    },
}));

interface MapProps {
    status: "success" | "error" | null;
}

const Map: FunctionComponent<MapProps> = (props) => {
    return (
        <MapBase id="map" className={props.status ?? ""}>
            <span></span>
        </MapBase>
    );
};

export default Map;
