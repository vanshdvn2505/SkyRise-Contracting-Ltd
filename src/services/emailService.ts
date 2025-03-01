import emailjs from "@emailjs/browser";

interface EmailFormData {
  [key: string]: any;
}

export const sendEmail = async (
  formData: EmailFormData,
  templateId: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
) => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  if (!SERVICE_ID || !templateId || !PUBLIC_KEY) {
    return { success: false, message: "Email service is not configured." };
  }

  try {
    await emailjs.send(SERVICE_ID, templateId, formData, PUBLIC_KEY);

    return { success: true, message: "Email sent successfully!" };
  }
  catch (error: any) {
    console.error("EmailJS Error:", error.text || error.message);
    return { success: false, message: "Failed to send email." };
  }
};
