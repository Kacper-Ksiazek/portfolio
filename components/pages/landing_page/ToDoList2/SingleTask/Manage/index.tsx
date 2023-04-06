// Tools
import { styled } from "@mui/material";
import { useDelayedState } from "@/hooks/useDelayedState";
import { useModalControl } from "./hooks/useModalControl";
// Types
import type { FunctionComponent } from "react";
// Other components
import UnwindedMenu from "./UnwindedMenu";
import DefaultActionButton from "./DefaultActionButton";
// Styled components
import ModalWrapper from "./ModalWrapper";

const ManageWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    right: "8px",
    width: "46px",
    height: "46px",
    transform: "translateY(-50%)",
    ...theme.mixins.flex_center,
    color: "#fff",
    cursor: "pointer",
}));

interface ManageProps {
    isCompleted: boolean;
    isDeleting: boolean;
    isUrgent: boolean;

    toggleUrgency: () => void;
    remove: () => void;
}

const Manage: FunctionComponent<ManageProps> = (props) => {
    const { value: unwindMenu, isChanging, setValue: setUnwindMenu } = useDelayedState<boolean>(false, 500);

    const renderUnwindedMenu: boolean = unwindMenu || (!unwindMenu && isChanging);

    const { buttonElementRef, close, open, position } = useModalControl(renderUnwindedMenu, setUnwindMenu);
    return (
        <ManageWrapper>
            <DefaultActionButton
                ref={buttonElementRef} //
                remove={props.remove}
                showUnwindButton={!props.isCompleted}
                showDeleteButton={props.isCompleted && !props.isDeleting}
                unwindMenuList={open}
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
