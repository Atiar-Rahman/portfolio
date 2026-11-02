import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current || isSending) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      await Swal.fire({ title: "Email service is not configured yet", text: "Please add the EmailJS environment variables before publishing the form.", icon: "error" });
      return;
    }

    setIsSending(true);
    try {
      await emailjs.sendForm(serviceId, templateId, form.current, { publicKey });
      form.current.reset();
      await Swal.fire({ title: "Message sent!", text: "Thank you—I'll get back to you as soon as possible.", icon: "success" });
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      await Swal.fire({ title: "Message was not sent", text: "Please try again or email me directly at atiar1709@gmail.com.", icon: "error" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full md:w-2/3 mx-auto">
      <form ref={form} onSubmit={handleSubmit} className="space-y-3">
        <input type="hidden" name="to_email" value="atiar1709@gmail.com" />
        <label className="sr-only" htmlFor="contact-name">Your name</label>
        <input id="contact-name" type="text" name="user_name" className="w-full rounded-xl border p-3" placeholder="Your name" required />
        <label className="sr-only" htmlFor="contact-email">Your email address</label>
        <input id="contact-email" type="email" name="user_email" className="w-full rounded-xl border p-3" placeholder="Your email" required />
        <label className="sr-only" htmlFor="contact-message">Your message</label>
        <textarea id="contact-message" name="message" className="min-h-32 w-full rounded-xl border p-3" placeholder="Tell me about your project" required />
        <button className="btn btn-primary w-full rounded-xl" type="submit" disabled={isSending}>{isSending ? "Sending…" : "Send message"}</button>
      </form>
    </div>
  );
};

export default ContactForm;
