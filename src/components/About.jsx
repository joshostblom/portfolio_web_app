import me from "../assets/me.jpg";

function About() {
  return (
    <div className="flex flex-col gap-10 sm:px-14 py-16 justify-center items-center">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-end">
        <img src={me} className="h-auto rounded-full w-44 md:w-60 lg:w-80" />
        <h1 className="text-4xl text-right whitespace-nowrap font-bold md:text-4xl lg:text-5xl">
          Hi, I'm <span className="text-blue-600">Josh Ostblom</span>,<br />a
          Software Engineer.
        </h1>
      </div>

      <div className="justify-start">
        <h2 className="text-3xl font-bold">About</h2>
        <p>
          I grew up in Omaha, Nebraska. There, I attended Ralston High School
          where I was involved in band, robotics, and the honor's society. After
          getting my diploma in 2020, I attended the University of Nebraska
          Omaha where I pursued a bachelor's in computer science. In fall of
          2022, I transferred to the University of Nebraska Lincoln where I am
          continuing my degree. I am expected to graduate in December of 2024,
          and I plan on continuing my education to earn a master's in computer
          science by December of 2025 through an accelerated program.
        </p>
      </div>
    </div>
  );
}

export default About;
