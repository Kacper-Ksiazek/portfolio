// Tools
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import MobileEditModeModalWrapper from "./Wrapper";
import { Title, Description, DueDatePicker, DueTimePicker, LabelPicker, UrgencySwitch, LocalizationInput } from "../_common_for_both_edit_modes";

const MobileEditModeModal: FunctionComponent = () => {
    return (
        <MobileEditModeModalWrapper>
            <Title className={CSS_REFERENCES.TITLE_INPUT} />

            <UrgencySwitch className={CSS_REFERENCES.URGENCY_SWITCH} />
            <LabelPicker className={CSS_REFERENCES.LABEL_PICKER} />
            <DueDatePicker className={CSS_REFERENCES.DATE_PICKER} />

            <DueTimePicker className={CSS_REFERENCES.DUE_TIME_PICKER} />
            <LocalizationInput className={CSS_REFERENCES.LOCALIZATION_PICKER} />

            <Description className={CSS_REFERENCES.DESCRIPTION_INPUT} />
        </MobileEditModeModalWrapper>
    );
};

export default MobileEditModeModal;
