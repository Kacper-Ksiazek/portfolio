// Types
import { MutableRefObject } from "react";

export function allignViewport({ current }: MutableRefObject<HTMLDListElement>) {
    const wrapper = current;

    if (wrapper) {
        const overflowContentWrapper: HTMLDivElement | null = wrapper.childNodes[0] ? (wrapper.childNodes[0] as HTMLDivElement) : null;

        if (overflowContentWrapper) {
            overflowContentWrapper.scrollTo({
                top: 0,
                behavior: "smooth",
                left: 0,
            });
        }

        setTimeout(() => {
            wrapper.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 1);
    }
}
