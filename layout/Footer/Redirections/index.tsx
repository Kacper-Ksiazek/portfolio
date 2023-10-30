// Tools
import { alpha, styled } from "@mui/material";
import { CSS_REFERENCES, SELECTORS } from "layout/Footer/css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import SingleFooterRedirection from "./SingleRedirection";
// Styled components
const FooterRedirectionsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "4px",
    [SELECTORS.REDIRECTIONS_DIVIDER]: {
        height: "4px",
        width: "4px",
        background: alpha("#fff", 0.3),
        borderRadius: "1px",
    },
}));

const FooterRedirections: FunctionComponent = () => {
    return (
        <FooterRedirectionsWrapper>
            <SingleFooterRedirection tooltip="Go to 404 page" path="/404">
                404
            </SingleFooterRedirection>

            <span className={CSS_REFERENCES.REDIRECTIONS_DIVIDER} />

            <SingleFooterRedirection tooltip="Go to 500 page" path="/500">
                500
            </SingleFooterRedirection>

            <span className={CSS_REFERENCES.REDIRECTIONS_DIVIDER} />

            <SingleFooterRedirection tooltip="Go to disabled javascript page" path="/no-javascript?preview-mode=1">
                no-js
            </SingleFooterRedirection>
        </FooterRedirectionsWrapper>
    );
};

export default FooterRedirections;
