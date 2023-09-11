// Tools
import { useModalControl, useMenuVisibility } from "./hooks/";
import { useEditModeContext, useTaskDataContext } from "../hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import UnwindedMenu from "./UnwindedMenu";
import VisibleActionButton from "./VisibleActionButton";
// Styled components
import ManageWrapper from "./Base";
import ModalWrapper from "./ModalWrapper";

const Manage: FunctionComponent = () => {
    const { isOpened: isInEditMode } = useEditModeContext();
    const { originalTask, taskIsBeingRemoved } = useTaskDataContext();

    const taskIsCompleted: boolean = originalTask.isCompleted === true;

    const { menuIsVisible, applyOutroAnimation, setMenuVisibility } = useMenuVisibility();

    const modalControl = useModalControl(menuIsVisible, setMenuVisibility);

    return (
        <ManageWrapper>
            <VisibleActionButton
                ref={modalControl.buttonElementRef}
                //
                showUnwindButton={isInEditMode === false && taskIsCompleted === false}
                showDeleteButton={isInEditMode === false && taskIsCompleted === true && taskIsBeingRemoved === false}
                //
                unwindMenuList={modalControl.open}
            />

            <ModalWrapper
                close={modalControl.close} //
                isOpen={menuIsVisible}
            >
                <UnwindedMenu
                    className={applyOutroAnimation ? "outro" : ""}
                    sx={{
                        top: `${modalControl.position.top}px`,
                        left: `${modalControl.position.left}px`,
                    }}
                    closeMenu={modalControl.close}
                />
            </ModalWrapper>
        </ManageWrapper>
    );
};

export default Manage;
