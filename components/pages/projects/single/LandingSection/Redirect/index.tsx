// Tools
import { useState } from "react";
// Types
import type { FunctionComponent, Dispatch, SetStateAction } from "react";
// Material UI Icons
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// Styled components
import RedirectBase from "./RedirectBase";

interface RedirectProps {
    url: string;
    title: string;
    setIsHovered: Dispatch<SetStateAction<boolean>>;
}

const Redirect: FunctionComponent<RedirectProps> = (props) => {
    const [hoverAnimation, setHoverAnimation] = useState<null | "display-hover-animation" | "hide-hover-animation">(null);

    const onHover = () => {
        props.setIsHovered(true);
        setHoverAnimation("display-hover-animation");
    };
    const onBlur = () => {
        props.setIsHovered(false);
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
