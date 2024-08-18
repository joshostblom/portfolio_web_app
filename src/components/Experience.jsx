import sandhills from "/images/sandhills.jpg";

function Experience() {
  return (
    <div className="flex flex-col gap-10 sm:px-14 py-10 justify-center items-center">
      <h1 className="text-3xl md:text-5xl font-bold w-full text-center">
        Experience
      </h1>
      <div className="flex flex-col lg:flex-col gap-5">
        <div>
          <h2 className="text-2xl font-bold">Sandhills Global</h2>
          <div className="flex flex-col gap-5">
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
            <div className="flex justify-center">
              <img
                src={sandhills}
                className="rounded-lg object-contain m-2 h-auto w-full lg:w-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
