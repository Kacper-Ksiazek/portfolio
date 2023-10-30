// Tools
import { CSS_REFERENCES } from "components/pages/http_status_code/css_references";
import { PARAGRAPH_1, PARAGRAPH_2, PARAGRAPH_3 } from "@/components/pages/no_javascript/assets/texts";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
// Styled components
import NoJavascriptWrapper from "@/components/pages/no_javascript/Base";

const NoJavascript: FunctionComponent = () => {
    return (
        <NoJavascriptWrapper>
            <div id="js-logo">
                <PriorityHighIcon />
            </div>

            <h1 id={CSS_REFERENCES.HTTP_STATUS_CODE_TITLE}>JAVASCRIPT IS REQUIRED</h1>
            <p id={CSS_REFERENCES.EXPLANATION}>
                <span>{PARAGRAPH_1}</span>
                <span>{PARAGRAPH_2}</span>
                <span>{PARAGRAPH_3}</span>
                <span>Thanks for understanding.</span>
            </p>
        </NoJavascriptWrapper>
    );
};

export default NoJavascript;
