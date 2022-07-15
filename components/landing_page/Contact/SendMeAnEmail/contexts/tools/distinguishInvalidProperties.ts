// Tools
import { useEffect, useState } from "react";
// Types
import type { Schema } from "joi";

interface DistinquishInvalidPropertiesParams {
    schema: Schema;
    body: Record<any, any>;
}

interface DistinquishInvalidPropertiesResult {
    checkWhetherAFieldIsValid: (field: string) => boolean;
    everythingIsValid: boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (params: DistinquishInvalidPropertiesParams): DistinquishInvalidPropertiesResult => {
    const [invalidFields, setInvalidFields] = useState<string[]>([]);

    useEffect(() => {
        const { error } = params.schema.validate(params.body, { abortEarly: false });
        setInvalidFields(error ? (error as any).details.map((el: any) => el.path[0]) : []);
    }, [params]);

    return {
        checkWhetherAFieldIsValid: (prop) => invalidFields.includes(prop),
        everythingIsValid: invalidFields.length === 0,
    };
};
