/* eslint-disable @typescript-eslint/no-unused-vars */
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default async function onSubmit(values: any, { resetForm }: any) {
  // Delay 😏
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Send Email
  const service_id = process.env.SERVICE_ID;
  const template_id = process.env.TEMPLATE_ID;
  const public_key = process.env.PUBLIC_KEY;

  try {
    const res = await emailjs.send(service_id!, template_id!, values, {
      publicKey: public_key,
      limitRate: {
        throttle: 30000,
      },
    });
    toast.success("Message sent! 😊");
    resetForm();
  } catch (err) {
    console.log(err);
    toast.error("Message not sent! 😓");
  }
}
