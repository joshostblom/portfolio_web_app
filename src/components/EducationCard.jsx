function EducationCard(props) {
  return (
    <div className="flex shadow-sm bg-slate-100 dark:bg-slate-800 px-5 py-3 rounded-lg">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          {props.logos.map((logo) => (
            <img className="w-10 h-10 mt-2" src={logo} />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{props.title}</h2>
          {props.locations.map((location) => (
            <h3>{location}</h3>
          ))}
          <h4 className="text-gray-500 dark:text-gray-400">{props.dates}</h4>
          <div className="mt-5">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
