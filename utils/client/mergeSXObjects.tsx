// Types
import type { SxProps as MUISxProps } from "@mui/material";
import type { SxProps as AppSXProps } from "@/@types/MUI";

type SxProps = MUISxProps | AppSXProps;

export const mergeSXObjects = (...objectToMerge: SxProps[]): Record<any, any> => {
    const result: Record<any, any> = {};

    objectToMerge.forEach((singleObject) => {
        Object.entries(singleObject as any).forEach(([key, val]) => {
            if (result.hasOwnProperty(key)) {
                const value = result[key];
                // Merge objects
                if (typeof value === "object") {
                    result[key] = {
                        ...result[key],
                        ...(val as any),
                    };
                }
                // Override property
                else {
                    result[key] = val;
                }
            } else {
                result[key] = val;
            }
        });
    });

    return result;
};
