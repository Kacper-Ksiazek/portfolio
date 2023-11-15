export type ForefrontRectangleColor = "BLACK" | "SECONDARY";

export interface RectangleStyles {
    initialHeight: `${string}px`;
    backgroundColor: string;
    zIndex: number;
    delays: {
        intro: number;
        outro: number;
    };
}

export type Styles = Record<ForefrontRectangleColor, RectangleStyles>;
