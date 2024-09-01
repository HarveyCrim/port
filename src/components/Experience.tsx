import ExperienceCard from "./ExperienceCard"

const Experience = () => {
  return (
    <div className="bg-[#1b1f23] flex min-h-[600px] flex-col pt-[70px] items-center">
        <div className="flex justify-center w-full">
            <span className="text-slate-100 text-4xl md:text-6xl">Experience</span><span className="text-pink-500 text-4xl">.</span>
        </div>
        <div className="flex flex-col flex-wrap justify-center p-7  md:mt-[10px] w-fit gap-4 space-y-7">
            <ExperienceCard date = {"January 2024 - April 2024"} role = {"Application Developer"} org = {"Noratek Solutions"} points = {[
                "Developed the front-end and back-end of the Dashboard component for the CityReporter product by using NextJS and Kendo UI library/ReactJs for UI and writing groovy scripts to convert JSON data into Kendo-readable Hashmaps.",
                "Built several REST API endpoints for the CityReporter product using robust in-house authentication middlewares using ExpressJS while following MVC architecture guidelines.",
                "Assisted Senior Developers in transitioning various VanillaJS based components of the CityReporter product into Vite framework based components while utilzing typescript as the underlying language.",

            ]}/>
            <ExperienceCard date = {"May 2023 - December 2023"} role = {"Junior Developer"} org = {"Noratek Solutions"} points = {[
                "Assisted in transitioning from Context API based state to React-Redux global store wherever feasible, in order to minimize prop drilling and children component reloads. This, in turn, ensured a faster user experience.",
                "Created the layout for over 50 reports for the CityReporter product while also handling API endpoints in Java for the controllers and the service objects to ensure proper flow of parameters and user data in JSON format.",
                "Integrated several landmark-based Excel spreadsheets for local governments in the cityReporter product using the Excel API while writing corresponding NodeJS middlewares to turn JSON data into Excel API readable data.",
                "Assisted in creation and repair of various front-end user tests to ensure a good user experience."
            ]}/>
            <ExperienceCard date = {"September 2022 - December 2022"} role = {"Developer Intern"} org = {"VancouverLaptops.com"} points = {[
                "Assisted in creating the landing page for the organization utilizng framer-motion, tailwindCSS, redux-toolkit and other npm libraries to ensure smooth animations and a good user experience.",
                "Participated in weekly meetings for front-end design changes and discussions on changes in core technologies.",
                "Worked with the Development team responsible for switching over to functional components from class-based components for easier readablity and understanding for the future employees.",
            ]}/>
        </div>
    </div>
  )
}

export default Experience