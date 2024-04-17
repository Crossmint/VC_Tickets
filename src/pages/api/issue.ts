import { callCrossmintAPI } from "@/utils/crossmint";
import { waitForCredential } from "@/utils/polling";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { email } = req.body;
        console.log(`Issuing ticket for ${email}`);

        const payload = {
            metadata: {
                name: "Event 1",
                image: "https://cryptologos.cc/logos/solana-sol-logo.png",
                description: "Access to event 1",
            },
            recipient: `email:${email}:polygon`,
            credential: {
                subject: {
                    name: email,
                },
                expiresAt: "2234-12-12",
            },
        };
        const response = await callCrossmintAPI(
            `unstable/collections/${process.env.COLLECTION_ID}/credentials`,
            {
                method: "POST",
                body: payload,
            }
        );
        console.log("Issue Credential Response", response);
        waitForCredential(response.credentialRetrievalId, email);
        res.status(200).json({
            message: "Ticket issued successfully",
            response,
        });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
