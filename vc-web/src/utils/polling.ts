import { callCrossmintAPI } from "./crossmint";
import { sendEmail } from "./sendEmail";

export async function waitForCredential(credId: string, userEmail: string) {
    // credId = "urn:uuid:d32565fc-3059-48a3-b3c8-5dcf71fb4acd";
    console.log(credId);
    let response: any;
    while (1) {
        response = await callCrossmintAPI("unstable/credentials/" + credId, {
            method: "get",
        });
        console.log("waiting for cred", credId);
        if (response.pass !== undefined) {
            break;
        }
        await new Promise((resolve) => setTimeout(resolve, 10 * 1000));
    }
    console.log(response);
    const credential = response.decryptedCredential;
    const pass = response.pass.google;
    sendEmail(credential, pass, userEmail);
}
