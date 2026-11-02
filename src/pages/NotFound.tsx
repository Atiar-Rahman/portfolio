import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const NotFound = () => (
  <section className="mx-auto flex min-h-[65vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
    <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">404 error</p>
    <h1 className="mt-4 text-6xl font-black tracking-tight text-base-content">Page not found.</h1>
    <p className="mt-5 max-w-md leading-relaxed text-base-content/70">The page you’re looking for may have moved, been removed, or never existed.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <Link to="/" className="btn btn-primary"><FaHome /> Back home</Link>
      <button type="button" onClick={() => window.history.back()} className="btn btn-outline"><FaArrowLeft /> Go back</button>
    </div>
  </section>
);

export default NotFound;
