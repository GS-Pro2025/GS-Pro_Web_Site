import emailjs from "@emailjs/browser";

const SERVICE_ID = "default_service"; 
const TEMPLATE_ID = "template_vqm0pgj";
const PUBLIC_KEY = "xostW5Tumeh3J33e3"; 

export const sendEmail = async (formData) => {
    try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
        return { success: true, response };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error };
    }
};
