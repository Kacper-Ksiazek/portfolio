// Tools
import useWindowSizes from "@/hooks/useWindowSizes";
// Types
import type { FunctionComponent } from "react";
import type { DirectRenderWhenVisibleProps } from "./_DirectRenderWhenVisible";
// Other components
import DirectRenderWhenVisible from "./_DirectRenderWhenVisible";

const TransformWhenVisible: FunctionComponent<DirectRenderWhenVisibleProps> = ({ children, ...props }) => {
    const { width } = useWindowSizes();

    if (width < 1000) return <>{children}</>;

    return (
        <DirectRenderWhenVisible {...props}>
            {children}
            {/*  */}
        </DirectRenderWhenVisible>
    );
};

export default TransformWhenVisible;
