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
  const [pageHeight, setPageHeight] = useState(1000);

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

  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = window.innerHeight;
      if (window.innerWidth <= 640) {
        // Tailwind's `sm` breakpoint
        setPageHeight(windowHeight * 1);
      } else if (window.innerWidth <= 768) {
        // Tailwind's `md` breakpoint
        setPageHeight(windowHeight * 0.9);
      } else {
        setPageHeight(windowHeight * 1.07);
      }
    };

    updateHeight(); // Set initial height
    window.addEventListener("resize", updateHeight); // Update height on resize
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div>
      {resumeUrl && (
        <div className="flex flex-col items-center">
          <a
            href={resumeUrl}
            className="flex items-center w-auto shadow-sm bg-white dark:bg-slate-800 rounded-full py-3 px-10 mb-5"
            download="Joshua_Ostblom_Resume.pdf"
          >
            Click to download
            <RiFileDownloadLine className="pl-2 size-7" />
          </a>

          <Document
            file={resumeUrl}
            className="shadow-xl w-full max-w-screen-2xl"
          >
            <Page
              pageNumber={1}
              height={pageHeight}
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
