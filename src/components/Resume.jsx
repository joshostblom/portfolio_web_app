import { Document, Page, pdfjs } from "react-pdf";
import { RiFileDownloadLine } from "react-icons/ri";
import { api } from "../api/api";
import { useEffect, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Resume() {
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    const getResume = async () => {
      await api
        .get("resources/get/resume", {
          responseType: "blob",
        })
        .then((response) => {
          const fileURL = window.URL.createObjectURL(new Blob([response.data]));
          setResumeUrl(fileURL);
        })
        .catch((error) => console.error("Download failed:", error));
    };

    getResume();
  }, []);

  return (
    <div>
      {resumeUrl && (
        <div className="flex flex-col items-center">
          <a
            href={resumeUrl}
            className="flex items-center w-auto shadow-sm bg-slate-200 dark:bg-slate-800 rounded-full py-3 px-10 m-5"
            download="Joshua_Ostblom_Resume.pdf"
          >
            Click to download
            <RiFileDownloadLine className="pl-2 size-7" />
          </a>

          <Document file={resumeUrl}>
            <Page
              className="shadow-xl"
              height={1000}
              pageNumber={1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>
      )}
    </div>
  );
}

export default Resume;
