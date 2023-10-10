// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Other components
import SingleFooterRedirection from "./Redirections/SingleRedirection";
// Styled components
const FooterRedirectionsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "4px",
    "span.divider": {
        height: "4px",
        width: "4px",
        background: "#fff",
        opacity: 0.3,
        borderRadius: "1px",
    },
}));

const FooterRedirections: FunctionComponent = () => {
    return (
        <FooterRedirectionsWrapper>
            <SingleFooterRedirection tooltip="Go to 404 page" path="/404">
                404
            </SingleFooterRedirection>

            <span className="divider" />

            <SingleFooterRedirection tooltip="Go to 500 page" path="/500">
                500
            </SingleFooterRedirection>

            <span className="divider" />

            <SingleFooterRedirection tooltip="Go to disabled javascript page" path="/no-javascript">
                no-js
            </SingleFooterRedirection>
        </FooterRedirectionsWrapper>
    );
};

export default FooterRedirections;
