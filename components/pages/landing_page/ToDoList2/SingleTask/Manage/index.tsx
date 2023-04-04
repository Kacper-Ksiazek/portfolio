// Tools
import { createPortal } from "react-dom";
import { useDelayedState } from "@/hooks/useDelayedState";
import { useModalControl } from "./hooks/useModalControl";
// Types
import type { FunctionComponent } from "react";
// Other components
import UnwindedMenu from "./UnwindedMenu";
import UnwindIconButton from "./UnwindIconButton";
// Material UI Icons
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
// Styled components
import { ManageWrapper, ModalBase } from "./styled_components";

interface ManageProps {
    isCompleted: boolean;
    isDeleting: boolean;

    remove: () => void;
}

const Manage: FunctionComponent<ManageProps> = (props) => {
    const {
        value: unwindMenu, //
        isChanging,
        setValue: setUnwindMenu,
    } = useDelayedState<boolean>(false, 500);

    const renderUnwindedMenu: boolean = unwindMenu || (!unwindMenu && isChanging);

    const { buttonElementRef, close, open, position } = useModalControl(renderUnwindedMenu, setUnwindMenu);

    return (
        <ManageWrapper>
            <UnwindIconButton
                ref={buttonElementRef} //
                onClick={open}
                tooltip="More"
                active={props.isCompleted === false}
            >
                <MoreVertRounded />
            </UnwindIconButton>

            <UnwindIconButton
                ref={buttonElementRef} //
                onClick={props.remove}
                tooltip="Delete"
                active={props.isCompleted === true && props.isDeleting === false}
            >
                <DeleteOutlineOutlined />
            </UnwindIconButton>

            {(() => {
                if (renderUnwindedMenu) {
                    return createPortal(
                        <ModalBase>
                            <span className="clickable-background" onClick={close} />
                            <UnwindedMenu
                                className={unwindMenu && isChanging ? "outro" : ""}
                                sx={{
                                    top: `${position.top}px`,
                                    left: `${position.left}px`,
                                }}
                                remove={props.remove}
                            />
                        </ModalBase>,
                        document.getElementById("modals-wrapper") as HTMLElement
                    );
                }
            })()}
        </ManageWrapper>
    );
};

export default Manage;
