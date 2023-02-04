export type MapStatus = "success" | "error" | null;

export interface MapContext {
    status: MapStatus;
    changeMapStatus: (val: MapStatus) => void;
}
