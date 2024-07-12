import me from "../assets/me.jpg";

function About() {
  return (
    <div className="flex space-x-5 g-10 px-14 py-16 justify-center items-center">
      <div className="flex gap-5 items-center w-1/2 justify-end">
        <h1 className="text-4xl text-right font-bold">
          Hi, I'm <span className="text-blue-600">Josh Ostblom</span>,<br />a
          Software Engineer.
        </h1>
        <img src={me} className="w-56 h-auto rounded-full" />
      </div>

      <div className="w-1/2 justify-start">
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
