// Tools
import { styled } from "@mui/material";
import { introAnimationsForTextContent } from "../intro_animations/below_750px";
import { useProjectsContext } from "../../hooks/useProjectsContext";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled components
const Base = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "250px",
    width: "calc(100% - 250px)",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 2,
}));

interface TextContentWrapperProps {
    children: ReactNode;
    order: "even" | "odd";
}

const TextContentWrapper: FunctionComponent<TextContentWrapperProps> = (props) => {
    const { viewport, intersectionObserverMargin } = useProjectsContext();

    const body: ReactNode = <Base className={`single-project-text-content-wrapper ${props.order}`}>{props.children}</Base>;

    if (viewport !== "small") return body;

    return (
        <TransformWhenVisible
            to={introAnimationsForTextContent} //
            rootMargin={intersectionObserverMargin}
        >
            {body}
        </TransformWhenVisible>
    );
};

export default TextContentWrapper;
