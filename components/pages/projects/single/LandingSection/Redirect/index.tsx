// Tools
import { useState } from "react";
import { useLandingScreenContext } from "@/components/pages/projects/single/LandingSection/hooks/useLandingScreenContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// Styled components
import RedirectBase from "./RedirectBase";

interface RedirectProps {
    url: string;
    title: string;
}

const Redirect: FunctionComponent<RedirectProps> = (props) => {
    const constext = useLandingScreenContext();
    const [hoverAnimation, setHoverAnimation] = useState<null | "display-hover-animation" | "hide-hover-animation">(null);

    const onHover = () => {
        constext.setIsHovered(true);
        setHoverAnimation("display-hover-animation");
    };
    const onBlur = () => {
        constext.setIsHovered(false);
        setHoverAnimation("hide-hover-animation");
    };

    const onClick = () => {
        try {
            (window as any).open(props.url, "_blank").focus();
        } catch (e) {}
    };

    return (
        <RedirectBase
            className={[hoverAnimation ?? undefined, "redirect"].join(" ")} //
            onClick={onClick}
        >
            <span
                className="animation-trigger" //
                onMouseMove={onHover}
                onMouseEnter={onHover}
                onMouseOut={onBlur}
            />

            <span className="hover-animation-bar black" />
            <span className="hover-animation-bar violet" />

            <span className="text">{props.title}</span>
            <KeyboardArrowRight />
        </RedirectBase>
    );
};

export default Redirect;
