export interface ExtendedPairOfIcons extends PairOfIcons {
    /** `nth-of-type` of first element of the pair*/
    leftSide: number;
    /** `nth-of-type` of second element of the pair*/
    rightSide: number;
}

export interface PairOfIcons {
    y: number;
    x: number;
}

export interface GenerateCSSProps {
    /** Size of the icon */
    size: number;

    Vue_and_Prisma: PairOfIcons;
    Git_and_Next: PairOfIcons;
    React_and_Python: PairOfIcons;
    Sass_and_Jest: PairOfIcons;
    Material_and_Node: PairOfIcons;
    JS_and_TS: PairOfIcons;
    HTML_and_CSS: PairOfIcons;
}
