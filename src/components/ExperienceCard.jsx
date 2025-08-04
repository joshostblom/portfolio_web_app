import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ExperienceCard(props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col gap-2 shadow-sm bg-slate-100 dark:bg-slate-800 px-5 py-3 rounded-lg">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
          <h2 className={`text-4xl md:text-5xl font-bold ${props.titlecolor}`}>
            {props.title}
          </h2>
          <div>
            <h2 className="md:text-xl">{props.position}</h2>
            <div className="text-md text-gray-500 dark:text-gray-400">
              {props.dates}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          key="bullets"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <ul className="list-disc list-outside pl-6">
            {props.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="w-full pt-2 cursor-pointer hover:text-gray-500 transition-colors duration-200 font-semibold"
        >
          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700" />
          <div className="w-full pt-2 flex flex-row gap-2 items-center justify-center">
            {showMore ? "SHOW LESS" : "SHOW MORE"}
            {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </button>

        <AnimatePresence initial={false} mode="wait">
          {showMore && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden pt-2"
            >
              <h2 className="text-2xl font-bold">DETAILS</h2>
              <div>{props.description}</div>
              <div className="flex justify-center">
                {props.images.map((source, index) => (
                  <img
                    key={index}
                    className="rounded-lg object-contain m-2 h-auto w-full"
                    src={source}
                    alt={`experience-${index}`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ExperienceCard;
