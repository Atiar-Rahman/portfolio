import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // Send form using EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            title: "Message successfully sent",
            icon: "success",
            draggable: true
          });
          console.log("SUCCESS!");
        },
        (error) => {
          Swal.fire({
            title: "something error please try again or another way",
            icon: "error",
            draggable: true
          });
          console.log("FAILED...", error.text);
        }
      );

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full md:w-2/3 mx-auto">
      <form ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          className="w-full py-2 px-2 border mb-3 rounded-xl"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="user_email"
          className="w-full py-2 px-2 border mb-3 rounded-xl"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          className="w-full py-2 px-2 border mb-3 rounded-xl"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className="btn btn-outline w-full rounded-xl" type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
