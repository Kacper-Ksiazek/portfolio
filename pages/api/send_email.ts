// Tools
import { MethodNotAllowed, InvalidRequestedBody, Forbidden, Conflict, NotFound } from "@/utils/api/errors";
import HandleSendingEmailForm from "@/utils/api/HandleSendingEmailForm";
// Types
import type { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== "POST") {
            throw new MethodNotAllowed();
        }

        const API = new HandleSendingEmailForm(req);
        await API.sendEmail();

        return res.status(200).end();
    } catch (e) {
        if (e instanceof InvalidRequestedBody) return res.status(400).end();
        else if (e instanceof Forbidden) return res.status(403).end();
        else if (e instanceof NotFound) return res.status(404).end();
        else if (e instanceof MethodNotAllowed) return res.status(405).end();
        else if (e instanceof Conflict) return res.status(409).end();
        return res.status(500).end();
    }
};
