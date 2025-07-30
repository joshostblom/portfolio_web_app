import sandhills from "/images/sandhills.jpg";
import lyftfriends from "/images/lyftfriends.jpg";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="flex flex-col gap-5 py-5">
      <h1 className="title">EXPERIENCE</h1>
      <div className="flex flex-col lg:flex-col gap-5">
        <ExperienceCard
          title="LYFT"
          titlecolor={"text-lyftpink"}
          position={"Andoid Engineer, Intern"}
          bullets={[
            "Developed dynamic UI components for incentives on the home screen of the Lyft rider Android app using Jetpack Compose and MVI architecture, enhancing rider engagement and retention.",
            "Implemented real-time map updates using Kotlin coroutines to track user and driver locations, automatically adjusting map zoom to improve visibility and overall user experience.",
            "Ensured code reliability and maintainability by achieving complete unit test coverage and implementing snapshot testing for all UI components.",
          ]}
          description={
            <div>
              <p>
                Throughout the summer of 2025 I had the privelege of working at
                Lyft as an Android intern in San Francisco. My project involved
                creating a space for incentives on the home screen. These
                incentives informed the user about deals and perks they
                currenlty have when requesting a ride with the goal of
                increasing user interest. The project involved two UI variants,
                both implemented with Jetpack Compose. Utilizing MVI
                architecture, any interaction with the UI triggered an intent
                which then reduces the state within the ViewModel to update the
                view. Both variants were also setup with impression tracking to
                analyze user preference through experimentation.
              </p>
            </div>
          }
          dates="May 2025 - August 2025"
          images={[lyftfriends]}
        />

        <ExperienceCard
          title="SANDHILLS GLOBAL"
          titlecolor={"text-sandhillsblue"}
          position={"Software Engineer, Intern"}
          bullets={[
            "Utilized Jetpack Compose, Dagger/Hilt, and Retrofit in Android Studio (Kotlin/Java) to pioneer over 25 full-stack mobile applications from the ground up that have achieved over 100,000 downloads each on the Google Play Store.",
            "Enhanced APIs within the .NET platform by applying REST design principles to efficiently manage business logic across the company’s Trade Sites applications.",
            "Designed and implemented a modular microservice for OAuth verification using JWT tokens which are injected into view models and passed to views through states following the MVVM architecture.",
            "Refactored the WebView module within the Trade Sites and Inventory Management mobile applications to enhance modularity, resulting in a 25% improvement to efficiency.",
            "Worked with Xamarin (C#) and GraphQL in Visual Studio to update the FR8Star and HiBid mobile apps, ensuring they remain synchronized with the web applications.",
            "Developed a domain search engine using React, CSS, and a DNS API to display status and statistics, currently utilized by over 1,200 employees.",
            "Employed GitHub Actions for CI/CD, automating build processes through customized workflows.",
          ]}
          description={
            <p>
              Starting in May 2022, I have been interning at Sandhills Global in
              Lincoln, NE. During my training, I gained experience working in an
              Agile environment, with MVC architecture patterns, and using
              source control. After training, I spent my first year in the
              Domains department, where I worked with ASP.NET to create and
              update endpoints for our API. I also used Razor and CSS to develop
              a portal for employees to access information about the various
              domains owned by the company. Through this portal, users could
              check the status of domains, contact information, and list any
              sub-domains. Following my time in the Domains department, I was
              transferred to the Mobile department. Here, I have been working
              with Android Studio, Xamarin/Maui, and ASP.NET to develop both the
              front and back end of mobile applications for Sandhills' many
              websites. My favorite project involved using Jetpack Compose,
              Retrofit, and Dagger Hilt to create a WebView Android application
              from scratch for all our TradeSites websites. This project
              provided me with valuable experience in programming architecture,
              including modularization, the MVVM pattern, and dependency
              injection. I also learned to properly utilize JWT tokens for
              authorization communication between our application and websites.
              You can try the app by downloading&nbsp;
              <a
                href="https://play.google.com/store/apps/details?id=sandhills.machinery.app&hl=en_US"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Machinery Trader from the Google Play store
              </a>
              .
            </p>
          }
          dates="May 2022 - May 2025"
          images={[sandhills]}
        />
      </div>
    </div>
  );
}

export default Experience;
