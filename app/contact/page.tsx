import ContactForm from "@/components/contactform";
import getSVG from "@/utils/getSVG";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="contact-page">
      <div>
        <h1>Contact Us</h1>
        <div>
          <Image
            src={getSVG("support")}
            alt="Contact Us"
            width={288}
            height={288}
          />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
