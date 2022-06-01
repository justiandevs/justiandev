import Link from "next/link";
import {FaBaseballBall, FaCode, FaMale, FaServer} from "react-icons/fa";
import {Seo} from "../components/seo/Seo";
import Projects from "./projects";
import {ProjectsContainer} from "../components/projects/ProjectsContainer";

export default function Home() {
  return (
      <>
        <Seo title={"Home"} description={"Hey, I'm Justian Spijkerbosch. A fullstack developer with his specialization in frontend development from the Netherlands."} />
        {/* hero section */}
        <div className="flex max-w-7xl mx-auto px-4 xl:px-0 flex-col-reverse gap-8 items-center justify-center md:flex-row justify-center md:justify-between items-center pt-8">
          {/* first part */}
          <div className="flex flex-col gap-4 md:gap-0 text-center md:text-left">
            <h1>Fullstack<br />developer<br />from the Netherlands<span className="text-yellow-500">.</span></h1>
            <p>I'm Justian Spijkerbosch. A fullstack developer from the Netherlands,<br />i'm well known with a lot of programming technologies, like Next.JS and NestJS.</p>
            <div>
              <Link href={"/about"}>
                <button className="button primary mt-4">
                  More about me
                </button>
              </Link>
            </div>
          </div>
          {/* picture */}
          <div className="relative flex items-center md:items-end justify-center md:justify-end mr-4">
            <div className="hidden md:flex bg-blue-900 absolute right-0 top-0 w-1/2 md:w-3/5 bottom-0 transform rotate-3 rounded-lg"></div>
            <div className="hidden md:flex bg-yellow-500 absolute right-0 top-0 w-1/2 md:w-3/5 bottom-0 transform -rotate-3 rounded-lg"></div>
            <img className="rounded-lg w-3/5 z-10" src={"images/front.jpg"} alt={"Picture of myself, Justian Spijkerbosch"} />
          </div>
        </div>
        {/* intro section */}
        <div className="bg-blue-50 my-16 max-w-full">
          <div className="max-w-7xl mx-auto px-4 xl:px-0 grid grid-cols-2 xl:grid-cols-4 grid gap-8 xl:gap-32 xl:h-96 xl:mt-64 pb-16 xl:mb-48">
            {/* left content */}
            <div className="flex flex-col gap-3 col-span-2 pt-16 xl:pb-16">
              <div className="flex flex-col gap-1">
                <h2>Who <br /><span className="text-yellow-500">I am.</span></h2>
                <p>I am Justian. A full-stack developer whose great passion lies in programming front-end projects. Nevertheless, I am also very interested in programming backend projects. Besides programming, I study computer science in Utrecht (the Netherlands) and I play handball in Apeldoorn at AHV Achilles.</p>
              </div>
              <div>
                <Link href={"/about"}>
                  <button className={"button primary"}>
                    About me
                  </button>
                </Link>
              </div>
            </div>
            {/* right content */}
            <div className="col-span-2 xl:-mt-28">
              <div className="flex grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
                <div className="rounded-lg bg-white p-8 flex flex-col gap">
                  <FaServer className="text-green-600 text-4xl mb-4" />
                  <h3>Webdesign</h3>
                  <p>As I said, my great passion lies in front-end development. And what I particularly enjoy doing is designing websites and/or web apps. With the likes of Figma and Adobe XD.</p>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="rounded-lg bg-white p-8 flex flex-col gap w-full">
                    <FaCode className="text-yellow-500 text-4xl mb-4" />
                    <h3>Programming</h3>
                    <p>I also enjoy developing APIs and logic behind my front-end solutions. Therefore, a big hobby of mine is programming itself.</p>
                  </div>
                  <div className="rounded-lg bg-white p-8 flex flex-col gap w-full">
                    <FaBaseballBall className="text-blue-500 text-4xl mb-4" />
                    <h3>Handball</h3>
                    <p>I have been playing handball for 8 seasons now. To this day, I find it one of the most enjoyable sports I have ever played.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* projects */}
        <div className="max-w-7xl mx-auto px-4 xl:px-0 xl:pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* solo project */}
          <div className="col-span-1 lg:order-last flex flex-col gap">
            <h2>Projects</h2>
            <p>This is a short overview of the last three projects I worked on.</p>
            <div>
              <Link href={"/projects"}>
                <button className="button primary mt-3">
                  My projects
                </button>
              </Link>
            </div>
          </div>
          <div className="col-span-3">
            <ProjectsContainer />
          </div>
        </div>
      </>
  )
}
