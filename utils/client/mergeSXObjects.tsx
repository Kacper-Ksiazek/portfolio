// Types
import type { SxProps } from "@mui/system";

export const mergeObjects = (...objectToMerge: SxProps[]): Record<any, any> => {
    const result: Record<any, any> = {};

    objectToMerge.forEach((singleObject) => {
        Object.entries(singleObject as any).forEach(([key, val]) => {
            if (result.hasOwnProperty(key)) {
                result[key] = {
                    ...result[key],
                    ...(val as any),
                };
            } else {
                result[key] = val;
            }
        });
    });

    return result;
};
