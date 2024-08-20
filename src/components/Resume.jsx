import { RiFileDownloadLine } from "react-icons/ri";
import { api } from "../api/api";
import { useEffect, useState } from "react";

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
    <div className="py-5">
      {resumeUrl && (
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-3xl md:text-5xl text-center font-bold w-full">
            Resume
          </h1>
          <a
            href={resumeUrl}
            className="flex items-center w-auto shadow-sm bg-white dark:bg-slate-800 rounded-full py-3 px-20"
            download="Joshua_Ostblom_Resume.pdf"
          >
            Click to download
            <RiFileDownloadLine className="pl-2 size-7" />
          </a>
          <div className="relative w-4/5" style={{ paddingTop: "100%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full border border-gray-300 rounded-lg shadow-lg z-0"
              src="https://joshostblom.com/api/resources/get/resume"
              title="Resume PDF"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Resume;
