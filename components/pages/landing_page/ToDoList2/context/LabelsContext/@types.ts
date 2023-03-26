export type ColorInHEX = `#${string}`;
export type LabelsCollection = Record<string, ColorInHEX>;

export interface I_LabelsContext {
    labels: string[];
    getCorrespondingColor: (label: string) => ColorInHEX;
}

export interface I_LabelsUpdatersContext {
    add: (params: { label: string; color: ColorInHEX }) => void;
    changeColor: (params: { label: string; newColor: ColorInHEX }) => void;
    remove: (labelToBeRemoved: string) => void;
}
