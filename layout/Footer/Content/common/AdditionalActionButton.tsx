// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
// Types
import type { FunctionComponent, ReactNode, MouseEvent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Other components
import StyledButton from "@/components/atoms/forms/StyledButton";
// Styled components
const RedirectionButton = styled(StyledButton)(({ theme }) => ({
    height: "42px",
    padding: "0 36px",
    animation: `${fadeSimple} .3s .5s both linear`,
    svg: {
        marginRight: "6px",
    },
}));

interface AdditionalActionButtonProps {
    tooltip: string;
    buttonMsg: string;
    icon: ReactNode;

    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const AdditionalActionButton: FunctionComponent<AdditionalActionButtonProps> = (props) => {
    return (
        <Tooltip title={props.tooltip} placement="top">
            <RedirectionButton
                onClick={props.onClick} //
                componentThemeID="MUI"
                subtleHoverEffect
            >
                {props.icon}
                {props.buttonMsg}
            </RedirectionButton>
        </Tooltip>
    );
};

export default AdditionalActionButton;
