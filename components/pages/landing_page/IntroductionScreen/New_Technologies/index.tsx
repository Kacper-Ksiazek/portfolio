// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps, SxProps } from "@mui/system";
// Styled Components
const TechnologiesWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10,
    display: "flex",
    justifyContent: "space-between",
}));

interface PlaceTechnologiesInsideWingParams {
    contentSidePadding: number;
    spacingBetweenColumns: number;
    nearest: number;
    middle: number;
    farest: number;
    technologySize: number;
}
const placeItemsInsideWing = (params: PlaceTechnologiesInsideWingParams): SxProps => {
    const generateStylesForSingleWing = (wingType: "left" | "right") => {
        const nearestSelectors = {
            left: "&:nth-of-type(3) .technology:nth-of-type(3)",
            right: "&:nth-of-type(1) .technology:nth-of-type(3)",
        }[wingType];

        const middleSelectors = {
            left: [
                "&:nth-of-type(2) .technology:nth-of-type(2), &:nth-of-type(2) .technology:nth-of-type(3)", // Second column
                "&:nth-of-type(3) .technology:nth-of-type(2), &:nth-of-type(3) .technology:nth-of-type(4)", // Third column
            ].join(", "),
            right: [
                "&:nth-of-type(2) .technology:nth-of-type(2), &:nth-of-type(2) .technology:nth-of-type(3)", // Second column
                "&:nth-of-type(1) .technology:nth-of-type(2), &:nth-of-type(1) .technology:nth-of-type(4)", // Third column
            ].join(", "),
        }[wingType];

        const farestSelectors = {
            left: "&:nth-of-type(1) .technology:nth-of-type(2)",
            right: "&:nth-of-type(3) .technology:nth-of-type(2)",
        }[wingType];

        const handleTranslateX = (distance: number): string => `translateX(${wingType === "left" ? "-" : ""}${distance}px)`;

        return {
            [`&.${wingType}`]: {
                [wingType === "left" ? "paddingRight" : "paddingLeft"]: `${params.contentSidePadding}px`,
                justifyContent: wingType === "left" ? "flex-end" : "flex-start",
                ".column": {
                    ".technology": {
                        width: `${params.technologySize}px`,
                        height: `${params.technologySize}px`,
                    },
                    "&:not(&:nth-of-type(1))": {
                        marginLeft: `${params.spacingBetweenColumns}px`,
                    },
                    [nearestSelectors]: {
                        transform: handleTranslateX(params.nearest),
                    },
                    [middleSelectors]: {
                        transform: handleTranslateX(params.middle),
                    },
                    [farestSelectors]: {
                        transform: handleTranslateX(params.farest),
                    },
                },
            },
        };
    };

    return {
        ...generateStylesForSingleWing("left"),
        ...generateStylesForSingleWing("right"),
    };
};

const Wing = styled("div")(({ theme }) => ({
    width: "50%",
    display: "flex",
    boxSizing: "border-box",
    //
    ...(placeItemsInsideWing({
        contentSidePadding: 340,
        spacingBetweenColumns: 72,
        nearest: 96,
        middle: 80,
        farest: 64,
        technologySize: 100,
    }) as any),
    ["@media (max-height:900px)"]: {
        ".technology": {
            "&:not(&:nth-of-type(1))": {
                marginTop: "64px",
            },
        },
    },
    ["@media (max-height:840px)"]: {
        ...(placeItemsInsideWing({
            contentSidePadding: 320,
            spacingBetweenColumns: 64,
            nearest: 96,
            middle: 64,
            farest: 48,
            technologySize: 90,
        }) as any),
    },
    ["@media (max-height:780px)"]: {
        ...(placeItemsInsideWing({
            contentSidePadding: 330,
            spacingBetweenColumns: 56,
            nearest: 96,
            middle: 56,
            farest: 32,
            technologySize: 84,
        }) as any),
        ".technology": {
            "&:not(&:nth-of-type(1))": {
                marginTop: "56px",
            },
        },
    },
    ["@media (max-width:1450px)"]: {
        ...(placeItemsInsideWing({
            contentSidePadding: 180,
            spacingBetweenColumns: 64,
            nearest: 128,
            middle: 64,
            farest: 48,
            technologySize: 84,
        }) as any),
        ["@media (max-height:700px)"]: {
            ".technology": {
                "&:not(&:nth-of-type(1))": {
                    marginTop: "46px",
                },
            },
        },
        ["@media (max-height:670px)"]: {
            ...(placeItemsInsideWing({
                contentSidePadding: 180,
                spacingBetweenColumns: 64,
                nearest: 112,
                middle: 64,
                farest: 36,
                technologySize: 74,
            }) as any),
        },
    },
}));

const Column = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
}));

const Technology = styled("div")(({ theme }) => ({
    position: "relative",
    backgroundImage: 'url("./images/technologies/pink/react.png")',
    // backgroundImage: 'url("./images/technologies/white/react.png")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transition: "background-image .3s, opacity .3s",
    opacity: 0.3,
    cursor: "pointer",
    filter: "grayscale(1)",
    "&:not(&:nth-of-type(1))": {
        marginTop: "72px",
    },
    "&:hover": {
        opacity: 1,
        filter: "grayscale(0)",
    },
}));
const Technologies: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return (
        <TechnologiesWrapper>
            <Wing className="left">
                <Column className="column ">
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                </Column>

                <Column className="column ">
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                </Column>

                <Column className="column ">
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                </Column>
            </Wing>
            <Wing className="right">
                <Column className="column ">
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                </Column>

                <Column className="column ">
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                </Column>

                <Column className="column ">
                    <Technology className="technology" />
                    <Technology className="technology" />
                    <Technology className="technology" />
                </Column>
            </Wing>
        </TechnologiesWrapper>
    );
};

export default Technologies;
