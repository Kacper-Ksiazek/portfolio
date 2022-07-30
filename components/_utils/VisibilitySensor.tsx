// Tools
import { useState, useEffect, useRef } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import VisibilitySensorBase from "react-visibility-sensor";
// Styled components

interface UnfadeOnScrollProps {
    children: ReactNode;
    offsetTop?: number;
    offsetBottom?: number;
}

const VisibilitySensor: FunctionComponent<UnfadeOnScrollProps> = (props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [scrollDuringLatestChange, setScrollDuringLatestChange] = useState<number>(0);
    const wrapperElement = useRef<HTMLElement | null>(null);

    const changeVisibility = (visibility: boolean) => {
        const currentScroll = window.scrollY;
        if (scrollDuringLatestChange === currentScroll) return;
        setIsVisible(visibility);
        setScrollDuringLatestChange(currentScroll);
    };

    useEffect(() => {
        if (wrapperElement.current?.firstChild) {
            if (isVisible) {
                (wrapperElement.current.firstChild as any).classList.add("visible");
            }
            //
            else {
                (wrapperElement.current.firstChild as any).classList.remove("visible");
            }
        }
    }, [isVisible]);

    return (
        <VisibilitySensorBase
            onChange={changeVisibility} //
            offset={{
                top: props.offsetTop ?? 300,
                bottom: props.offsetBottom ?? 300,
            }}
            partialVisibility={true}
            intervalDelay={200}
        >
            <div ref={wrapperElement as any}>{props.children}</div>
        </VisibilitySensorBase>
    );
};

export default VisibilitySensor;
