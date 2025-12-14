import { SlArrowDownCircle } from "react-icons/sl";

type DownloadButtonProps = {
  pdf: string; // URL or path to the PDF file
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ pdf }) => {
  const handleDownload = (): void => {
    const link = document.createElement("a");
    link.href = pdf;               // file path (public folder or URL)
    link.download = "atiar_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      <span className="text-green-700 btn ml-3 text-xl flex items-center gap-2">
        Resume <SlArrowDownCircle />
      </span>
    </button>
  );
};

export default DownloadButton;
