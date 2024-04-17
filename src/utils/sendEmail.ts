import SendGridMailer from "@sendgrid/mail";

export async function sendEmail(credential: any, pass: string, email: string) {
    SendGridMailer.setApiKey(process.env.SD_API || "");
    const payload = JSON.stringify(credential) + "\n" + pass;
    try {
        await SendGridMailer.send({
            to: email,
            from: {
                email: "mailer@crossmint.io",
                name: "Crossmint",
            },
            text: payload,
            subject: "Ticket",
        });
    } catch (error: any) {
        console.error(error.response.body.errors);
    }
    console.log("Mail sent to ", email, " for credential ", credential.id);
}
