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
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [key, setKey] = useState<number>(0);

    useEffect(() => {
        const element: HTMLElement | null = (ref as unknown as MutableRefObject<HTMLButtonElement | null>).current;

        function openModal() {
            setIsModalOpen(true);
            setKey((val) => val + 1);
        }

        if (element instanceof HTMLElement) {
            element.addEventListener("click", openModal);

            return () => {
                element.removeEventListener("click", openModal);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, (ref as any).current]);

    return (
        <Modal
            isOpen={isModalOpen} //
            key={key}
            onClose={() => setIsModalOpen(false)}
            {...props}
        >
            {children}
        </Modal>
    );
});

ConfirmationModal.displayName = "ConfirmationModal";
export default ConfirmationModal;
