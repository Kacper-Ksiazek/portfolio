// Tools
import { useState } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Visibility from "@mui/icons-material/Visibility";
// Other components
import WayToReachMeButton from "./WayToReachMeButton";

interface VisibilityControlButtonProps {
    tooltip: string;
    onVisible?: () => void;
    children?: ReactNode;
}

const VisibilityControlButton: FunctionComponent<VisibilityControlButtonProps> = (props) => {
    const [showContent, setShowContent] = useState<boolean>(false);

    const changeVisibility = () => {
        setShowContent(true);
        if (props.onVisible) props.onVisible();
    };

    return (
        <>
            <Fade in={!showContent}>
                <Tooltip title={props.tooltip} placement="top">
                    <WayToReachMeButton
                        onClick={changeVisibility} //
                        color="text"
                    >
                        <Visibility />
                    </WayToReachMeButton>
                </Tooltip>
            </Fade>
            {(() => {
                if (showContent && props.children) {
                    return props.children;
                }
            })()}
        </>
    );
};

export default VisibilityControlButton;
