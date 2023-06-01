// Tools
import { MutableRefObject, forwardRef, useEffect, useState } from "react";
// Types
import type { StyledModalProps } from "./content_placement/Modal";
// Other components
import Modal from "./content_placement/Modal";

interface ConfirmationModalProps extends Omit<StyledModalProps, "isOpen" | "onClose"> {
    //
}

const ConfirmationModal = forwardRef<HTMLButtonElement, ConfirmationModalProps>(({ children, ...props }, ref) => {
    const [isClose, setIsClose] = useState<boolean>(false);

    useEffect(() => {
        const element: HTMLElement | null = (ref as unknown as MutableRefObject<HTMLButtonElement | null>).current;
        const isDOMNode: boolean = element instanceof HTMLElement;
        function onClick() {
            setIsClose(true);
        }

        if (isDOMNode) {
            element?.addEventListener("click", onClick);

            return () => {
                element?.removeEventListener("click", onClick);
            };
        }
    }, [ref]);

    return (
        <Modal
            isOpen={isClose} //
            onClose={() => setIsClose(false)}
            {...props}
        >
            {children}
        </Modal>
    );
});

ConfirmationModal.displayName = "ConfirmationModal";
export default ConfirmationModal;
