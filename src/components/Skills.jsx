function Skills({ tiers }) {
  return (
    <div className="flex gap-8 flex-col h-full">
      <h2 className="text-3xl text-center font-bold w-full">Skills</h2>
      <ul className="flex flex-col gap-3 h-full">
        {tiers.map((tier, index) => (
          <li
            key={index}
            className="flex flex-col flex-grow bg-white dark:bg-slate-800 rounded-xl p-5"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-lg">{tier.name}</h3>
              <ul className={`flex flex-row gap-3`}>
                {tier.skills.map((skill, index) => (
                  <li key={index}>
                    <div
                      className="rounded-xl p-2 w-32 h-40 drop-shadow-md"
                      style={{
                        backgroundColor: `${tier.color}80`,
                      }}
                    >
                      <div className="flex flex-col text-center items-center dark:drop-shadow-lg">
                        <skill.icon className="text-5xl m-5" />
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
