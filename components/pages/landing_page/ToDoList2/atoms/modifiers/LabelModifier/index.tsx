// Tools
// Types
import type { FunctionComponent } from "react";
import type { LabelModifierProps, LabelCratorProps } from "./@types";

function isInCreatorMode(props: unknown): props is LabelCratorProps {
    return props !== null && typeof props == "object" && ("onChange" as keyof LabelCratorProps) in props;
}

const LabelModifier: FunctionComponent<LabelModifierProps> = (props) => {
    const;
    return (
        <>
            <span></span>
        </>
    );
};

export default LabelModifier;
