// Tools
import { useEffect } from "react";
import { useRouter } from "next/router";
import { CSS_REFERENCES } from "components/pages/http_status_code/css_references";
import { PARAGRAPH_1, PARAGRAPH_2, PARAGRAPH_3 } from "@/components/pages/no_javascript/assets/texts";
// Types
import type { FunctionComponent } from "react";
import type { ParsedUrlQuery } from "querystring";
// Material UI Icons
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
// Styled components
import NoJavascriptWrapper from "@/components/pages/no_javascript/Base";

function isInPreviewMode(queryObject: ParsedUrlQuery): boolean {
    return queryObject !== null && typeof queryObject === "object" && "preview-mode" in queryObject;
}

const NoJavascript: FunctionComponent = () => {
    const router = useRouter();

    useEffect(() => {
        console.log(router.query);
        if (isInPreviewMode(router.query) === true) return;

        const timeout: NodeJS.Timeout = setTimeout(() => router.push("/"), 700);
        return () => clearTimeout(timeout);
    }, [router, router.query]);

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
