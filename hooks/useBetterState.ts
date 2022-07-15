// Tools
import { useState } from "react";
// Types
import type { StatedDataField } from "@/@types/StatedDataField";

// eslint-disable-next-line import/no-anonymous-default-export
export default <T>(defaultValue: T): StatedDataField<T> => {
    const [value, setValue] = useState<T>(defaultValue);
    return { value, setValue };
};
