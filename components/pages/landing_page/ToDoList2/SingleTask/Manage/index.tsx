// Tools
import { createPortal } from "react-dom";
import { useDelayedState } from "@/hooks/useDelayedState";
import { useModalControl } from "./hooks/useModalControl";
import { useSingleTaskContext } from "../hooks/useSingleTaskContext";
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

const Manage: FunctionComponent = () => {
    const { data, actions, stages } = useSingleTaskContext();
    const { value: unwindMenu, isChanging, setValue: setUnwindMenu } = useDelayedState<boolean>(false, 500);

    const renderUnwindedMenu: boolean = unwindMenu || (!unwindMenu && isChanging);

    const { buttonElementRef, close, open, position } = useModalControl(renderUnwindedMenu, setUnwindMenu);

    return (
        <ManageWrapper>
            <UnwindIconButton
                ref={buttonElementRef} //
                onClick={open}
                tooltip="More"
                active={data.isCompleted === false}
            >
                <MoreVertRounded />
            </UnwindIconButton>

            <UnwindIconButton
                ref={buttonElementRef} //
                onClick={actions.remove}
                tooltip="Delete"
                active={data.isCompleted === true && stages.isDeleting === false}
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
