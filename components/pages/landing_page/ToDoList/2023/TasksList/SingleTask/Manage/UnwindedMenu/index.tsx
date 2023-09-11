// Tools
import { useEditModeContext, useTaskDataContext } from "../../hooks";
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
import UnwindedMenuBase from "./Base";

interface UnwindedMenuProps {
    className: string;
    sx: SxProps;

    closeMenu: () => Promise<void>;
}

const UnwindedMenu: FunctionComponent<UnwindedMenuProps> = (props) => {
    const editModeContext = useEditModeContext();
    const taskDataContext = useTaskDataContext();

    const isUrgent: boolean = taskDataContext.originalTask.urgent === true;

    function handleOnClick(cb: () => void): () => void {
        return () => {
            props.closeMenu();
            cb();
        };
    }

    function toggleUrgency() {
        taskDataContext.updateTask((currentValue) => {
            const newValue: Partial<typeof currentValue> = { urgent: !currentValue.urgent };

            editModeContext.updateNewState(newValue);
            return newValue;
        });
    }

    return (
        <UnwindedMenuBase className={props.className} sx={props.sx}>
            <MenuActionButton
                icon={isUrgent ? <ArrowDownwardOutlined /> : <ArrowUpwardOutlined />} //
                label={isUrgent ? "Make not urgent" : "Make urgent"}
                onClick={handleOnClick(toggleUrgency)}
            />
            <MenuActionButton
                icon={<ModeEditOutlineOutlined />} //
                label="Edit"
                onClick={handleOnClick(editModeContext.openEditMode)}
            />
            <MenuActionButton
                icon={<DeleteOutlineOutlined />} //
                label="Delete"
                color="error"
                onClick={handleOnClick(taskDataContext.removeTask)}
            />
        </UnwindedMenuBase>
    );
};

export default UnwindedMenu;
