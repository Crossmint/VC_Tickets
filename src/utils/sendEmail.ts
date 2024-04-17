import SendGridMailer from "@sendgrid/mail";
import { template } from "./email_template";
export async function sendEmail(credential: any, pass: string, email: string) {
    SendGridMailer.setApiKey(process.env.SD_API || "");
    const filled = template.replace("{LINK_PLACEHOLDER}", pass);
    try {
        await SendGridMailer.send({
            to: email,
            from: {
                email: "mailer@crossmint.io",
                name: "Crossmint",
            },
            html: filled,
            subject: "Ticket",
        });
    } catch (error: any) {
        console.error(error.response.body.errors);
    }
    console.log("Mail sent to ", email, " for credential ", credential.id);
}
