// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
import { useSingleTaskContext } from "@/components/pages/landing_page/ToDoList2/SingleTask/hooks/useSingleTaskContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import MenuActionButton from "./MenuActionButton";
// Material UI Icons
import ArrowUpwardOutlined from "@mui/icons-material/ArrowUpwardOutlined";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowDownwardOutlined from "@mui/icons-material/ArrowDownwardOutlined";
import ModeEditOutlineOutlined from "@mui/icons-material/ModeEditOutlineOutlined";
import { SxProps } from "@/@types/MUI";
// Styled Components
const UnwindedMenuBase = styled("div")(({ theme }) => ({
    position: "absolute",
    zIndex: 20,
    transform: "translate(calc(-100% + 40px), 40px)",
    animation: `${fadeSimple} .3s linear both`,
    "&.outro": {
        animation: `${fadeSimpleOUT} .3s linear both`,
    },

    background: theme.palette.background.default,
    listStyleType: "none",
    padding: "4px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "3px",
}));

interface UnwindedMenuProps {
    className: string;
    sx: SxProps;
    remove: () => void;
}

const UnwindedMenu: FunctionComponent<UnwindedMenuProps> = (props) => {
    const { data } = useSingleTaskContext();

    const isUrgent: boolean = data.urgent;

    return (
        <UnwindedMenuBase {...props}>
            <MenuActionButton
                icon={isUrgent ? <ArrowUpwardOutlined /> : <ArrowDownwardOutlined />} //
                label={isUrgent ? "Make urgent" : "Make-less-important"}
                onClick={() => console.log("essa")}
            />
            <MenuActionButton
                icon={<ModeEditOutlineOutlined />} //
                label="Edit"
                onClick={() => console.log("essa")}
            />
            <MenuActionButton
                icon={<DeleteOutlineOutlined />} //
                label="Delete"
                color="error"
                onClick={props.remove}
            />
        </UnwindedMenuBase>
    );
};

export default UnwindedMenu;
