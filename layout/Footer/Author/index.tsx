// Tools
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent } from "react";
// Styled Components
import AuthorHeaderBase from "./Base";

const AuthorHeader: FunctionComponent<{ javascriptIsEnabled: boolean }> = (props) => {
    return (
        <AuthorHeaderBase>
            <h4 className={CSS_REFERENCES.AUTHOR_NAME}>Created by: Kacper Książek</h4>
            <span className={CSS_REFERENCES.YEARS}>2019 - 2023</span>
        </AuthorHeaderBase>
    );
};

export default AuthorHeader;
