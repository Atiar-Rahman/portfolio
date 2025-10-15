
import ContactForm from './ContactForm';
import DownloadButton from './DownloadButton';
const ContactSection = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center bg-base-100">
        <div>
          <h1 className="mb-4 uppercase text-6xl font-bold text-lime-800">
            Let's Connect
          </h1>
          <p className="mb-4 text-2xl">
            Say Hello at{" "}
            <span className="border-b-2 text-green-800 font-medium">
              atiar1709@gmail.com
            </span>
          </p>
          <p className="text-xl">
            For more info. here's My
            <DownloadButton/>
          </p>
        </div>
        <div>
          <h1 className="text-center my-6 text-2xl font-bold">Contact my Me</h1>
          <ContactForm />
        </div>
      </div>
    );
};

export default ContactSection;