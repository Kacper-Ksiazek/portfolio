// Tools
import { styled } from "@mui/material";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
export const SmoothlyAppearingSectionBase = styled("div")(({ theme }) => ({
    animation: `${fadeSimple} .3s .2s linear both`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

interface SmoothlyAppearingSectionProps {
    children: ReactNode;
}

const SmoothlyAppearingSection: FunctionComponent<SmoothlyAppearingSectionProps> = (props) => {
    return <SmoothlyAppearingSectionBase>{props.children}</SmoothlyAppearingSectionBase>;
};

export default SmoothlyAppearingSection;
