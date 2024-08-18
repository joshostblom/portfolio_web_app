function Skills(props) {
  return (
    <div className="flex gap-5 flex-col justify-center items-center py-5">
      <h1 className="text-3xl md:text-5xl text-center font-bold w-full">
        Skills
      </h1>
      <ul className="flex flex-col gap-3 h-full">
        {props.tiers.map((tier, index) => (
          <li
            key={index}
            className="flex flex-col flex-grow bg-white dark:bg-slate-800 rounded-xl p-5"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-lg lg:text-xl">{tier.name}</h3>
              <ul className={`flex flex-wrap gap-3`}>
                {tier.skills.map((skill, index) => (
                  <li key={index}>
                    <div
                      className="rounded-xl p-2 drop-shadow-md w-20 h-24 lg:w-32 lg:h-44"
                      style={{
                        backgroundColor: `${tier.color}80`,
                      }}
                    >
                      <div className="flex flex-col text-center items-center dark:drop-shadow-lg text-xs lg:text-lg">
                        <skill.icon className="text-3xl lg:text-5xl m-3 lg:m-5" />
                        {skill.name}
                      </div>
                    </div>
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
