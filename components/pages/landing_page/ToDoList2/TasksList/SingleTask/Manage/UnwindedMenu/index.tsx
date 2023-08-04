// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
import { useEditModeContext } from "../../hooks/useEditModeContext";
// Types
import type { SxProps } from "@/@types/MUI";
import type { FunctionComponent } from "react";
// Other components
import MenuActionButton from "./MenuActionButton";
// Material UI Icons
import ArrowUpwardOutlined from "@mui/icons-material/ArrowUpwardOutlined";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowDownwardOutlined from "@mui/icons-material/ArrowDownwardOutlined";
import ModeEditOutlineOutlined from "@mui/icons-material/ModeEditOutlineOutlined";
// Styled Components
const UnwindedMenuBase = styled("div")(({ theme }) => ({
    position: "absolute",
    zIndex: 20,
    transform: "translate(calc(-100% + 40px), 40px)",
    animation: `${fadeSimple} .3s linear both`,
    "&.outro": {
        animation: `${fadeSimpleOUT} .3s linear both`,
    },

    background: theme.palette.mode === "light" ? theme.palette.background.MUIFormElementsBackground : theme.palette.background.default,
    listStyleType: "none",
    padding: "4px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "3px",
}));

interface UnwindedMenuProps {
    isUrgent: boolean;
    className: string;
    sx: SxProps;

    remove: () => void;
    toggleUrgency: () => void;
    closeMenu: () => Promise<void>;
}

const UnwindedMenu: FunctionComponent<UnwindedMenuProps> = (props) => {
    const editModeContext = useEditModeContext();

    function handleOnClick(cb: () => void): () => void {
        return () => {
            props.closeMenu();
            cb();
        };
    }

    return (
        <UnwindedMenuBase className={props.className} sx={props.sx}>
            <MenuActionButton
                icon={props.isUrgent ? <ArrowDownwardOutlined /> : <ArrowUpwardOutlined />} //
                label={props.isUrgent ? "Make not urgent" : "Make urgent"}
                onClick={handleOnClick(props.toggleUrgency)}
            />
            <MenuActionButton
                icon={<ModeEditOutlineOutlined />} //
                label="Edit"
                onClick={handleOnClick(editModeContext.toggleIsOpened)}
            />
            <MenuActionButton
                icon={<DeleteOutlineOutlined />} //
                label="Delete"
                color="error"
                onClick={handleOnClick(props.remove)}
            />
        </UnwindedMenuBase>
    );
};

export default UnwindedMenu;
