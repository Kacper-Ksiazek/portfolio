// Tools
import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";

interface PortalProps {
    selector: Selector;
    children: ReactNode;
}

const Portal: FunctionComponent<PortalProps> = (props) => {
    const ref = useRef<HTMLElement | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>(props.selector);
        setIsMounted(true);
    }, [props.selector]);

    // If the portal is mounted and the selector is valid, render the children
    if (isMounted && ref.current) {
        return createPortal(props.children, ref.current);
    }

    // Otherwise, render nothing
    return <></>;
};

export default Portal;
