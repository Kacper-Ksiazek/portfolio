// Tools
import { useEffect, useState, useMemo } from "react";
import useManagementContext from "@/components/landing_page/Contact/SendMeAnEmail/hooks/useManagementContext";
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
export default (params: DistinquishInvalidPropertiesParams): DistinquishInvalidPropertiesResult =>
    useMemo(() => {
        const [invalidFields, setInvalidFields] = useState<string[]>([]);
        const { formFillingStage } = useManagementContext();

        useEffect(() => {
            const { error } = params.schema.validate(params.body, { abortEarly: false });
            setInvalidFields(error ? (error as any).details.map((el: any) => el.path[0]) : []);
        }, [formFillingStage]);

        return {
            checkWhetherAFieldIsValid: (prop) => invalidFields.includes(prop),
            everythingIsValid: invalidFields.length === 0,
        };
    }, [params]);
