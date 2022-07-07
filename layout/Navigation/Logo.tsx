// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import Image from "next/Image";
// Styled Components
import SingleFlexWrapper from "./styled_components/SimpleFlexWrapper";
const Header = styled("h3")(({ theme }) => ({
    margin: "0",
    userSelect: "none",
    marginLeft: "20px",
    fontSize: "2rem",
    fontWeight: 700,
}));

const Logo: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return (
        <SingleFlexWrapper>
            <Image
                src={"/logo.png"} //
                width="67px"
                height="47px"
                alt="page-logo"
            />
            <Header className="alternative-font-family">K_Książek</Header>
        </SingleFlexWrapper>
    );
};

export default Logo;
