// Types
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        return res.status(200).json({
            usedMethod: req.method,
        });
    } catch (e) {
        return res.status(500).end();
    }
}
