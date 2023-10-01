// Types
import type { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        return res.status(200).json({
            usedMethod: req.method,
        });
    } catch (e) {
        return res.status(500).end();
    }
};
