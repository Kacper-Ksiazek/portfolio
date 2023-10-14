// Tools
import RWD from "./RWD";
import useWindowSizes from "@/hooks/useWindowSizes";
import { fadeFromTop } from "@/components/keyframes/intro";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SingleHobby from "./SingleHobby";
import Carousel from "@/components/utils/Carousel";
// Styled Components
import Paragraph from "../_styled_components/Paragraph";

const Hobbies: FunctionComponent = () => {
    const { width } = useWindowSizes();

    const { hobbies } = useBreakTheIceContentContext();

    return (
        <>
            <Paragraph animationDelay={0.7}>
                {formatTextViaBolding(
                    `I have consistently made thoughtful choices regarding how I spend my leisure time to avoid regrets. I have always sought ways to *balance enjoyment with productivity*.`
                )}
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
