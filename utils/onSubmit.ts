import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default async function onSubmit(values: any, { resetForm }: any) {
  // Delay 😏
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Send Email
  const SERVICE_ID = process.env.SERVICE_ID;
  const TEMPLATE_ID = process.env.TEMPLATE_ID;
  const PUBLIC_KEY = process.env.PUBLIC_KEY;

  try {
    const res = await emailjs.send(SERVICE_ID!, TEMPLATE_ID!, values, {
      publicKey: PUBLIC_KEY,
      limitRate: {
        throttle: 30000,
      },
    });
    toast.success("Message sent! 😊");
    resetForm();
  } catch (err) {
    toast.error("Message not sent! 😓");
  }
}
