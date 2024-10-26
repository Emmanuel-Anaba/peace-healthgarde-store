"use client";
import { FormFieldKey } from "@/lib/interfaces";
import formSchema from "@/utils/formSchema";
import onSubmit from "@/utils/onSubmit";
import { useFormik } from "formik";
import { LuFileText, LuMail, LuSend, LuUser } from "react-icons/lu";

export default function ContactForm() {
  const formFields = [
    {
      value: "Full Name",
      type: "text",
      icon: <LuUser />,
      full: false,
    },
    {
      value: "Email Address",
      type: "email",
      icon: <LuMail />,
      full: false,
    },
    {
      value: "Subject",
      type: "text",
      icon: <LuFileText />,
      full: true,
    },
  ];

  const {
    errors,
    values,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      full_name: "",
      email_address: "",
      subject: "",
      message: "",
    },
    validationSchema: formSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ value, type, icon, full }, i) => {
        const id = value.toLowerCase().replaceAll(" ", "_") as FormFieldKey;
        const hasError = errors[id] && touched[id];
        return (
          <div
            key={i}
            className={`input-container ${
              full ? "md:col-span-2" : "md:col-span-1"
            }
            ${hasError && "input-error"}
            `}>
            <input
              className="peer"
              type={type}
              name={id}
              id={id}
              placeholder={value}
              value={values[id]}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <div className="input-icon peer-focus:bg-laurel-100 peer-focus:text-laurel-600 dark:peer-focus:bg-laurel-100 dark:peer-focus:text-laurel-600">
              {icon}
            </div>
            {hasError && <p className="error-message">{errors[id]}</p>}
          </div>
        );
      })}
      <div
        className={`textarea-container ${
          errors.message && touched.message && "input-error"
        }`}>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          value={values.message}
          onBlur={handleBlur}
          onChange={handleChange}></textarea>
        {errors.message && touched.message && (
          <p className="error-message">{errors.message}</p>
        )}
      </div>
      <button
        disabled={isSubmitting}
        className="md:col-span-2 mx-auto md:mx-0 md:ml-auto w-60 h-11 text-lg rounded-full disabled:from-laurel-950 disabled:to-laurel-950 disabled:text-laurel-700"
        type="submit">
        Send <LuSend />
      </button>
    </form>
  );
}
