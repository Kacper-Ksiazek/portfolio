// Tools
import { forwardRef } from "react";
import { useEditModeContext, useValidationResultContext } from "../../hooks";
// Material UI Icons
import CheckRounded from "@mui/icons-material/CheckRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import MoreVertRounded from "@mui/icons-material/MoreVertRounded";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
// Other components
import StyledIconButton from "./StyledIconButton";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";

interface DefaultActionButtonProps {
    showUnwindButton: boolean;
    showDeleteButton: boolean;

    remove: () => void;
    unwindMenuList: () => void;
}

const DefaultActionButton = forwardRef<HTMLButtonElement, DefaultActionButtonProps>((props, ref) => {
    const editModeContext = useEditModeContext();
    const validationResultContext = useValidationResultContext();

    return (
        <>
            <SmoothConditionalRender when={props.showUnwindButton || editModeContext.applyMobileEditMode === true}>
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

            <SmoothConditionalRender when={editModeContext.isOpened && editModeContext.applyMobileEditMode === false}>
                <FlexBox horizontal="end">
                    <StyledIconButton
                        onClick={editModeContext.saveAndExit} //
                        tooltip="Apply changes"
                        disabled={!validationResultContext.someChangesHaveBeenMade || !validationResultContext.everythingIsValid}
                    >
                        <CheckRounded />
                    </StyledIconButton>
                    <StyledIconButton
                        onClick={editModeContext.discardChanges} //
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
