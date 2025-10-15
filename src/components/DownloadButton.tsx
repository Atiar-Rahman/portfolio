// DownloadButton.jsx

import { SlArrowDownCircle } from "react-icons/sl";
import pdf from '../../public/CV___for_atiar_rahman.pdf'
const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf; // file in public folder
    link.download = "atiar_resume.pdf"; // desired filename
    link.click();
  };

  return (
    <button onClick={handleDownload}>
      <span className="text-green-700 btn ml-3 text-xl">
        Resume <SlArrowDownCircle />
      </span>
    </button>
  );
};

export default DownloadButton;
