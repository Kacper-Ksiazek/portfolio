// Tools
import { forwardRef } from "react";
// Types
import type { UseEditModeResult } from "../../hooks/useEditMode";
// Material UI Icons
import CheckRounded from "@mui/icons-material/CheckRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
// Other components
import StyledIconButton from "./StyledIconButton";
import SmoothConditionalRender from "./SmoothConditionalRender";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface DefaultActionButtonProps {
    isInEditMode: boolean;
    showUnwindButton: boolean;
    showDeleteButton: boolean;
    /** Edit mode related property, indicates whether any changes has been applied */
    somethingHasChanged: boolean;
    newState: UseEditModeResult["newState"];

    remove: () => void;
    exitEditMode: () => void;
    applyChanges: () => void;
    unwindMenuList: () => void;
    updateNewState: UseEditModeResult["updateNewState"];
}

const DefaultActionButton = forwardRef<HTMLButtonElement, DefaultActionButtonProps>((props, ref) => {
    return (
        <>
            <SmoothConditionalRender when={props.showUnwindButton}>
                <StyledIconButton
                    ref={ref} //
                    onClick={props.unwindMenuList}
                    tooltip="More"
                >
                    <MoreVertRounded />
                </StyledIconButton>
            </SmoothConditionalRender>

            <SmoothConditionalRender when={props.showDeleteButton}>
                <StyledIconButton
                    onClick={props.remove} //
                    tooltip="Delete"
                >
                    <DeleteOutlineOutlined />
                </StyledIconButton>
            </SmoothConditionalRender>

            <SmoothConditionalRender when={props.isInEditMode}>
                <FlexBox horizontal="end">
                    <StyledIconButton
                        onClick={props.applyChanges} //
                        tooltip="Apply changes"
                        disabled={!props.somethingHasChanged}
                    >
                        <CheckRounded />
                    </StyledIconButton>
                    <StyledIconButton
                        onClick={props.exitEditMode} //
                        tooltip="Discard changes"
                    >
                        <CloseRounded />
                    </StyledIconButton>
                </FlexBox>
            </SmoothConditionalRender>
        </>
    );
});

DefaultActionButton.displayName = "DefaultActionButton";
export default DefaultActionButton;
