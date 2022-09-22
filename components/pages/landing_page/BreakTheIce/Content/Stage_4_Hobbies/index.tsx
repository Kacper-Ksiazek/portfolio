// Tools
import RWD from "./RWD";
import useWindowSizes from "@/hooks/useWindowSizes";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import SingleHobby from "./SingleHobby";
import Carousel from "@/components/utils/Carousel";
// Styled Components
import Paragraph from "../_styled_components/Paragraph";

const Hobbies: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const { width } = useWindowSizes();

    const { hobbies } = useBreakTheIceContentContext();

    return (
        <>
            <Paragraph animationDelay={0.7}>
                Because of working usually intensively and for long time I always try to spend my leisure time <strong>wisely</strong> and get as much pleasure as possible as well as combining my
                hobbies with something that <strong>teaches</strong> for instance a <strong>foreign language</strong>.
            </Paragraph>
            <Carousel
                itemsInTotal={3} //
                itemsPerSlide={width <= 550 ? 1 : 2}
                spacing={40}
                wrapperSx={{ mt: "20px", ...(RWD as any) }}
                navigationSx={{
                    animation: `${fadeFromTop} .3s 2s linear both`,
                }}
                key={width}
                disableAutomaticHeight
            >
                {hobbies.map((item, index) => {
                    return <SingleHobby key={item.id} data={item} />;
                })}
            </Carousel>
        </>
    );
};

export default Hobbies;
