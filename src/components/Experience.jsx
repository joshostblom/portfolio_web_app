import sandhills from "/images/sandhills.jpg";
import lyftfriends from "/images/lyftfriends.jpg";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="flex flex-col gap-5 py-5">
      <h1 className="title">EXPERIENCE</h1>
      <div className="flex flex-col lg:flex-col gap-5">

        <ExperienceCard
          title='LYFT'
          titlecolor={'lyftpink'}
          description='Throughout the summer of 2025 I had the privelege of working at Lyft
            as an Android intern in San Francisco. My project involved creating
            a space for incentives on the home screen. These incentives informed
            the user about deals and perks they currenlty have when requesting a
            ride with the goal of increasing user interest. The project involved
            two UI variants, both implemented with Jetpack Compose. Utilizing
            MVI architecture, any interaction with the UI triggered an intent
            which then reduces the state within the ViewModel to update the
            view. Both variants were also setup with impression tracking to
            analyze user preference through experimentation.'
          dates='May 2025 - August 2025'
          images={[lyftfriends]}
        />

        <ExperienceCard
          title='SANDHILLS GLOBAL'
          titlecolor={'sandhillsblue'}
          description={
            <>
              Starting in May 2022, I have been interning at Sandhills Global in
              Lincoln, NE. During my training, I gained experience working in an
              Agile environment, with MVC architecture patterns, and using source
              control. After training, I spent my first year in the Domains
              department, where I worked with ASP.NET to create and update
              endpoints for our API. I also used Razor and CSS to develop a portal
              for employees to access information about the various domains owned
              by the company. Through this portal, users could check the status of
              domains, contact information, and list any sub-domains. Following my
              time in the Domains department, I was transferred to the Mobile
              department. Here, I have been working with Android Studio,
              Xamarin/Maui, and ASP.NET to develop both the front and back end of
              mobile applications for Sandhills' many websites. My favorite
              project involved using Jetpack Compose, Retrofit, and Dagger Hilt to
              create a WebView Android application from scratch for all our
              TradeSites websites. This project provided me with valuable
              experience in programming architecture, including modularization,
              the MVVM pattern, and dependency injection. I also learned to
              properly utilize JWT tokens for authorization communication between
              our application and websites. You can try the app by
              downloading&nbsp;
              <a
                href="https://play.google.com/store/apps/details?id=sandhills.machinery.app&hl=en_US"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Machinery Trader from the Google Play store
              </a>
              .
            </>
          }
          dates='May 2022 - May 2025'
          images={[sandhills]}
        />
      </div>
    </div>
  );
}

export default Experience;
