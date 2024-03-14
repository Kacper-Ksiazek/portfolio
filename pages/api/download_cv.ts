// Tools
import fse from "fs-extra";
import * as HTTPErrors from "@/utils/api/errors";
import { validateQueryParams, getResponseContentType, getParticularCV } from "@/utils/serverless/cv";
// Types
import type { NextApiRequest, NextApiResponse } from "next";
import type { CVParams } from "@/@types/pages/CV";

interface Request extends Omit<NextApiRequest, "query"> {
    query: CVParams;
}

export const config = {
    api: {
        responseLimit: "24mb",
    },
};

export default function handler(req: Request, res: NextApiResponse) {
    try {
        // Check if the request method is allowed
        if (req.method !== "GET") throw new HTTPErrors.MethodNotAllowed();

        // Check if the query object is valid
        if (!validateQueryParams(req.query)) throw new HTTPErrors.InvalidRequestedBody();

        // Get data about the requested file
        const cvFile = getParticularCV(req.query);

        // Assert that the file exists
        if (!fse.existsSync(cvFile.path)) throw new HTTPErrors.NotFound();

        // Otherwise, send the file
        const stream = fse.createReadStream(cvFile.path);
        res.setHeader("Content-Type", getResponseContentType(req.query.format));
        res.setHeader("Content-Disposition", `attachment; filename=${cvFile.fileName}`);

        stream.pipe(res);
    } catch (e) {
        if (e instanceof HTTPErrors.InvalidRequestedBody) return res.status(400).end();
        else if (e instanceof HTTPErrors.NotFound) return res.status(404).end();
        else if (e instanceof HTTPErrors.MethodNotAllowed) return res.status(405).end();

        return res.status(500).end();
    }
}
