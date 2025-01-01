// Tools
import { CSS_REFERENCES } from "layout/Footer/css_references";
// Types
import type { FunctionComponent } from "react";
// Styled Components
import AuthorHeaderBase from "./Base";

const AuthorHeader: FunctionComponent = () => {
    return (
        <AuthorHeaderBase>
            <h4 id={CSS_REFERENCES.AUTHOR_NAME}>Created by: Kacper Książek</h4>
            <span id={CSS_REFERENCES.YEARS}>2019 - 2025</span>
        </AuthorHeaderBase>
    );
};

export default AuthorHeader;
