// Tools
import { useState } from "react";
import { forwardRef } from "react";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Loyalty from "@mui/icons-material/Loyalty";
import ArrowForward from "@mui/icons-material/ArrowForward";
// Other components
import { Reference } from "./styled_components/atoms";

interface ArtistReferenceProps {
    url: string;
    tooltip?: string;
}

const ArtistReference: FunctionComponent<ArtistReferenceProps> = (props) => {
    const ReferenceElementInstance = <ReferenceElement url={props.url} />;

    if (props.tooltip) {
        return (
            <Tooltip
                title={props.tooltip} //
                placement="top"
            >
                {ReferenceElementInstance}
            </Tooltip>
        );
    }

    return ReferenceElementInstance;
};

export default ArtistReference;

const ReferenceElement = forwardRef<HTMLAnchorElement, { url: string }>((props, ref) => {
    const { url, ...forwardRefProps } = props;

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const onHover = () => setIsHovered(true);
    const onBlur = () => setIsHovered(false);

    return (
        <Reference
            href={props.url} //
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
            ref={ref}
            {...forwardRefProps}
        >
            <span className="hover-controller" onMouseOver={onHover} onMouseOut={onBlur} />

            <Fade in={!isHovered}>
                <Loyalty />
            </Fade>

            <Fade in={isHovered}>
                <ArrowForward />
            </Fade>
        </Reference>
    );
});

ReferenceElement.displayName = "ReferenceElement";
