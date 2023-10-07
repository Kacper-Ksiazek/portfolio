// Tools
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Other components
import Link from "next/link";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";
import { ButtonsWrapper, MainWrapper, StatusCode, LearnMore } from "./styles_components";

interface HTTPStatusCodeProps {
    code: number;
    title: string;
    explanation: string;
}

const LATEST_PROJECT_PATH: string = "/projects/ABU_DHABI";

const HTTPStatusCode: FunctionComponent<HTTPStatusCodeProps> = (props) => {
    const learnMoreURL: string = `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${props.code}`;

    return (
        <MainWrapper>
            <StatusCode id={CSS_REFERENCES.HTTP_STATUS_CODE}>{props.code}</StatusCode>
            <h1 id={CSS_REFERENCES.HTTP_STATUS_CODE_TITLE}>{props.title}</h1>
            <p id={CSS_REFERENCES.EXPLANATION}>{props.explanation}</p>
            <h4 id={CSS_REFERENCES.AVAILABLE_RESOURCES_SUBHEADER}>Check other available resources</h4>
            <ButtonsWrapper id={CSS_REFERENCES.BUTTONS_WRAPPER}>
                <Link href="/" passHref>
                    <StyledButton componentThemeID="PRIMARY">Main page</StyledButton>
                </Link>

                <Link href={LATEST_PROJECT_PATH} passHref>
                    <StyledButton>Latest project</StyledButton>
                </Link>
            </ButtonsWrapper>

            <Tooltip title="Open mozilla developer web documentation and read more about this" placeholder="top">
                <LearnMore
                    id={CSS_REFERENCES.LEARN_MORE} //
                    href={learnMoreURL}
                    target="_blank"
                >
                    learn more about {props.code} response status code <strong>here</strong>
                </LearnMore>
            </Tooltip>
        </MainWrapper>
    );
};

export default HTTPStatusCode;
