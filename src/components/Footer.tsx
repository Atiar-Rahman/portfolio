

const Footer = () => {
    return (
      <footer className="footer my-2 md:my-10 sm:footer-horizontal footer-center bg-base-100 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right Md. Atiar Rahman
          </p>
        </aside>
      </footer>
    );
};

export default Footer;