// Tools
import { styled } from "@mui/material";
import { useDelayedState } from "@/hooks/useDelayedState";
import { useModalControl } from "./hooks/useModalControl";
// Types
import type { FunctionComponent } from "react";
// Other components
import UnwindedMenu from "./UnwindedMenu";
import VisibleActionButton from "./VisibleActionButton";
// Styled components
import ModalWrapper from "./ModalWrapper";

const ManageWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    right: "8px",
    width: "80px",
    height: "46px",
    transform: "translateY(-50%)",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
}));

interface ManageProps {
    isUrgent: boolean;
    isDeleting: boolean;
    isCompleted: boolean;
    isInEditMode: boolean;

    remove: () => void;
    toggleUrgency: () => void;
}

const Manage: FunctionComponent<ManageProps> = (props) => {
    const { value: unwindMenu, isChanging, setValue: setUnwindMenu } = useDelayedState<boolean>(false, 500);

    const renderUnwindedMenu: boolean = unwindMenu || (!unwindMenu && isChanging);

    const { buttonElementRef, close, open, position } = useModalControl(renderUnwindedMenu, setUnwindMenu);
    return (
        <ManageWrapper>
            <VisibleActionButton
                ref={buttonElementRef}
                //
                showUnwindButton={!props.isInEditMode && !props.isCompleted}
                showDeleteButton={!props.isInEditMode && props.isCompleted && !props.isDeleting}
                //
                unwindMenuList={open}
                remove={props.remove}
            />

            <ModalWrapper
                close={close} //
                isOpen={renderUnwindedMenu}
            >
                <UnwindedMenu
                    className={unwindMenu && isChanging ? "outro" : ""}
                    isUrgent={props.isUrgent}
                    sx={{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                    }}
                    closeMenu={close}
                    remove={props.remove}
                    toggleUrgency={props.toggleUrgency}
                />
            </ModalWrapper>
        </ManageWrapper>
    );
};

export default Manage;
