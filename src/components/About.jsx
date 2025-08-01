import socialData from "../data/socialData";
import { useEffect, useState } from "react";

function About() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    let message = "Hello!";
    if (hour < 12) {
      message = "Good Morning!";
    } else if (hour < 18) {
      message = "Good Afternoon!";
    } else {
      message = "Good Evening!";
    }
    setGreeting(message);
  }, []);

  return (
    <div className="flex flex-col gap-5 pb-5 w-full">
      <h1 className="title">ABOUT ME</h1>
      <div className="flex flex-col gap-2 shadow-sm bg-slate-100 dark:bg-slate-800 px-5 py-3 rounded-lg">
        <h2 className="text-2xl font-bold">{greeting}</h2>
        <p>
          Hi, I'm Joshua Ostblom — a software engineer with a passion for
          building efficient, user-focused applications that solve real-world
          problems. I'm currently pursuing a Master's in Computer Science at the
          University of Nebraska-Lincoln, where I also completed my Bachelor's
          degree with a minor in Mathematics. I've been fortunate to make the
          Dean's List every semester and am a proud recipient of the Susan
          Buffett Scholarship and a Platinum Award for my capstone project.
        </p>
        <p>
          Professionally, I've gained over three years of hands-on industry
          experience as a Software Engineering Intern at Sandhills Global, and
          most recently as an Android Engineer Intern at Lyft. At Sandhills, I
          led the development of over 25 mobile applications using Jetpack
          Compose and .NET, each surpassing 100,000 downloads on the Google Play
          Store. I also designed a modular OAuth microservice, enhanced
          cross-platform apps using Xamarin and GraphQL, and developed a domain
          search engine now used by over 1,200 internal employees. At Lyft, I
          worked on dynamic UI for rider incentives, implemented real-time map
          updates, and contributed robust test coverage for production-ready
          Android features using Kotlin and MVI architecture.
        </p>
        <p>
          On the side, I've built full-stack web applications using React.js,
          Express.js, and MySQL—including the very site you're on now. I've
          implemented secure REST APIs with JWT-based authentication and
          designed interactive front ends with Tailwind CSS, ensuring responsive
          and visually engaging user experiences. I'm constantly driven by
          curiosity and a desire to create. Whether it's optimizing a mobile
          interface, contributing to a web service, or exploring new
          technologies, I bring a collaborative, detail-oriented approach to
          every project. Outside of development, I enjoy astrophotography (check
          out my shots on Instagram), playing music (guitar, piano, saxophone),
          and finding new ways to combine creativity with technical skill.
        </p>
        <p>
          Feel free to explore my projects, check out my GitHub, or connect with
          me on LinkedIn. I'm always open to new opportunities, collaborations,
          and conversations.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {socialData.map((item) => (
            <AboutLink
              key={item.title}
              href={item.link}
              title={item.title}
              icon={<item.icon />}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutLink(props) {
  return (
    <a
      className="shadow-sm bg-white dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 px-3 py-1 rounded-full"
      href={props.href}
      target="_blank"
    >
      <div className="flex flex-row gap-2 items-center">
        {props.title}
        {props.icon}
      </div>
    </a>
  );
}

export default About;
