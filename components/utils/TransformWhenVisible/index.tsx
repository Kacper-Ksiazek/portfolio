// Tools
import useWindowSizes from "@/hooks/useWindowSizes";
// Types
import type { FunctionComponent } from "react";
import type { DirectTransformWhenVisibleProps } from "./_DirectTransformWhenVisible";
// Other components
import DirectTransformWhenVisible from "./_DirectTransformWhenVisible";

const TransformWhenVisible: FunctionComponent<DirectTransformWhenVisibleProps> = ({ children, ...props }) => {
    const { width } = useWindowSizes();

    if (width < 1000) return <>{children}</>;

    return (
        <DirectTransformWhenVisible {...props}>
            {children}
            {/*  */}
        </DirectTransformWhenVisible>
    );
};

export default TransformWhenVisible;
