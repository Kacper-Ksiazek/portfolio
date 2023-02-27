// Tools
import { styled } from "@mui/material";
import Carousel from "@/components/utils/Carousel";
// Types
import type { ComponentMeta, ComponentStoryFn } from "@storybook/react";

export default {
    title: "Utils/Carousel",
    component: Carousel,
    argTypes: {
        spacing: {
            description: `Spacing between elements, expresed in **px**`,
            control: { type: "number", min: 0 },
            table: {
                type: { summary: "number", required: true },
            },
        },
        itemsPerSlide: {
            description: "The amount of elements to display on each slide",
            control: { type: "range", min: 1, max: 6 },
            table: {
                type: { summary: "number", required: true },
            },
        },
        itemsInTotal: {
            description: "The amount of elements in total",
            control: { type: "number", min: 1, max: 20 },
            table: {
                type: { summary: "number", required: true },
            },
        },
        navigationSx: {
            control: "object",
            table: {
                type: { required: false, summary: "object" },
            },
            description: "Additional styles added to the **navigation wrapper element**, following the `MUI`'s convention of css-in-js",
        },
        wrapperSx: {
            control: "object",
            table: {
                type: { required: false, summary: "object" },
            },
            description: "Additional styles added to the **main wrapper element**, following the `MUI`'s convention of css-in-js",
        },
        navigationPosition: {
            description: " The position of the bottom navigation which controls the sliding",
            options: ["left", "center", "right"],
            control: { type: "radio" },
            table: {
                type: { summary: "'left' | 'right' | 'center'" },
            },
        },
        disableAutomaticHeight: {
            control: "boolean",
            description: "Disable automatic height establishing",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false },
            },
        },
    },
} as ComponentMeta<typeof Carousel>;

const CarouselItem = styled("div")(({ theme }) => ({
    position: "relative",
    height: "300px",
    borderRadius: "10px",
    background: theme.palette.primary.main,
    color: "#fff",
    fontFamily: "Montserrat Alternates",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10rem",
    fontWeight: 700,
}));

const Template: ComponentStoryFn<typeof Carousel> = (args) => {
    return (
        <Carousel {...args}>
            {[...(new Array(args.itemsInTotal).keys() as any as number[])].map((_, index) => {
                return <CarouselItem key={index}>{index + 1}</CarouselItem>;
            })}
        </Carousel>
    );
};

export const ThreeItemsAtOnce = Template.bind({});
ThreeItemsAtOnce.args = {
    itemsInTotal: 10,
    itemsPerSlide: 3,
    spacing: 10,
    navigationPosition: "center",
};
