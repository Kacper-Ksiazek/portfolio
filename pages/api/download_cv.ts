// Tools
import path from "path";
import fse from "fs-extra";
import { cvDir } from "@/utils/paths";
import * as HTTPErrors from "@/utils/api/errors";
import { validateQueryParams, getResponseContentType, getResponseFileName } from "@/utils/serverless/cv";
// Types
import type { NextApiRequest, NextApiResponse } from "next";
import type { CVPath, DownloadCVQueryParams } from "@/@types/pages/CV";

interface Request extends Omit<NextApiRequest, "query"> {
    query: DownloadCVQueryParams;
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

        const cvPath: CVPath = `${req.query.lang}/${req.query.variant}.${req.query.format}`;
        const filePath: string = path.join(cvDir, cvPath);

        // Assert that the file exists
        if (!fse.existsSync(filePath)) throw new HTTPErrors.NotFound();

        // Otherwise, send the file
        const stream = fse.createReadStream(filePath);
        res.setHeader("Content-Type", getResponseContentType(req.query.format));
        res.setHeader("Content-Disposition", `attachment; filename=${getResponseFileName(req.query)}`);

        stream.pipe(res);
    } catch (e) {
        if (e instanceof HTTPErrors.InvalidRequestedBody) return res.status(400).end();
        else if (e instanceof HTTPErrors.NotFound) return res.status(404).end();
        else if (e instanceof HTTPErrors.MethodNotAllowed) return res.status(405).end();

        return res.status(500).end();
    }
}
