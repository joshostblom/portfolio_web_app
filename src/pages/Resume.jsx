import { Document, Page, pdfjs } from "react-pdf";
import { RiFileDownloadLine } from "react-icons/ri";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Resume() {
  const downloadResume = () => {
    const url = "http://localhost:8080/resources/get/resume";

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Joshua_Ostblom_Resume.pdf";
        alink.click();
      })
      .catch((error) => console.error("Download failed:", error));
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={downloadResume}
        className="flex items-center w-auto shadow-sm bg-slate-200 dark:bg-slate-800 rounded-full py-3 px-10 m-5"
      >
        Click to download
        <RiFileDownloadLine className="pl-2 size-7" />
      </button>

      <Document file="http://localhost:8080/resources/get/resume">
        <Page
          className="shadow-xl"
          height={850}
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </div>
  );
}

export default Resume;
