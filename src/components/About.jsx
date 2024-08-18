import me from "/images/me.jpg";

function About() {
  return (
    <div className="flex flex-col gap-10 sm:px-14 py-10 justify-center items-center">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-end">
        <img src={me} className="h-auto rounded-full w-44 md:w-60 lg:w-80" />
        <h1 className="text-4xl text-right whitespace-nowrap font-bold md:text-4xl lg:text-5xl">
          Hi, I'm <span className="text-blue-600">Josh Ostblom</span>,<br />a
          Software Engineer.
        </h1>
      </div>

      <div>
        <h1 className="text-3xl md:text-5xl font-bold w-full text-center">
          About Me
        </h1>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold">Education</h2>
            <p>
              Before university, I attended Ralston High School, where I was
              involved in band, robotics, and the honor society. After receiving
              my diploma in 2020, I enrolled at the University of Nebraska Omaha
              to pursue a bachelor's degree in computer science. In the fall of
              2022, I transferred to the University of Nebraska Lincoln, where I
              am continuing my studies. I am expected to graduate in December
              2024 and plan to continue my education to earn a master's degree
              in computer science by December 2025 through an accelerated
              program.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Hobbies</h2>
            <div className="flex flex-col gap-5">
              <p>
                During my free time, I enjoy working on personal projects like
                this website. Outside of programming, I like to play tennis,
                hang out with friends, and take pictures of the night sky, also
                known as astrophotography. You can find my photos on
                Instagram&nbsp;
                <a
                  href="https://www.instagram.com/josh_likes_space/"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @josh_likes_space
                </a>
                . I'm also a big fan of music; I play guitar, piano, and
                saxophone. In high school, I was part of a quartet that
                performed the national anthem at a Storm Chasers baseball game.
                This semester, I’ll be getting back into music by participating
                in the&nbsp;
                <a
                  href="https://www.facebook.com/profile.php?id=100044109162937"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lincoln Community Concert Band
                </a>
                .
              </p>
              <div className="flex justify-center">
                <iframe
                  className="w-full h-96"
                  src="https://www.youtube.com/embed/zWLZ-wwnjgA?si=bfhQrIJlBUSIVbEx"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
