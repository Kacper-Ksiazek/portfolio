// Tools
import { createPortal } from "react-dom";
import { useDelayedState } from "@/hooks/useDelayedState";
import { useModalControl } from "./hooks/useModalControl";
// Types
import type { FunctionComponent } from "react";
// Other components
import UnwindedMenu from "./UnwindedMenu";
import UnwindIconButton from "./UnwindIconButton";
// Styled components
import { ManageWrapper, ModalBase } from "./styled_components";

const Manage: FunctionComponent = () => {
    const {
        value: unwindMenu, //
        isChanging,
        setValue: setUnwindMenu,
    } = useDelayedState<boolean>(false, 500);

    const renderUnwindedMenu: boolean = unwindMenu || (!unwindMenu && isChanging);

    const { buttonElementRef, close, open, position } = useModalControl(renderUnwindedMenu, setUnwindMenu);

    return (
        <ManageWrapper>
            <UnwindIconButton onClick={open} ref={buttonElementRef} />
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
