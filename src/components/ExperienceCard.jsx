function ExperienceCard(props) {
    return (
        <div className="flex flex-col shadow-sm bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
            <div className="flex flex-row gap-2 items-center">
                <h2 className={`text-4xl font-bold text-${props.titlecolor}`}>{props.title}</h2>
                <h2 className="text-xl">{props.dates}</h2>
            </div>
            <p>
                {props.description}
            </p>
            <div className="flex justify-center">
                {props.images.map((source) => (
                    <img
                        className="rounded-lg object-contain m-2 h-auto w-full"
                        src={source}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExperienceCard;