import { motion } from "framer-motion";

function Skills(props) {
  return (
    <div className="flex gap-5 flex-col justify-center items-center py-5 w-full">
      <h1 className="text-3xl md:text-5xl text-center font-bold">Skills</h1>
      <ul className="flex flex-col gap-3 w-full">
        {props.tiers.map((tier, index) => (
          <li
            key={index}
            className="flex flex-col flex-grow bg-white dark:bg-slate-800 rounded-xl p-5"
          >
            <div className="flex flex-col gap-2 md:gap-4">
              <h3 className="font-bold text-lg lg:text-xl">{tier.name}</h3>
              <ul className={`flex flex-wrap gap-0.5 md:gap-5`}>
                {tier.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex flex-col py-2 text-center items-center"
                  >
                    <motion.div
                      className="flex rounded-xl shadow-md p-4 justify-center"
                      style={{ backgroundColor: `${skill.color}80` }}
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <skill.icon className="text-3xl md:text-6xl" />
                    </motion.div>
                    <div className="w-20 text-xs md:text-sm">{skill.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
