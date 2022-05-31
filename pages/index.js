import Link from "next/link";
import {FaBaseballBall, FaCode, FaMale, FaServer} from "react-icons/fa";

export default function Home() {
  return (
      <>
        {/* hero section */}
        <div className="flex max-w-7xl mx-auto px-4 xl:px-0 flex-col-reverse gap-8 items-center justify-center md:flex-row justify-center md:justify-between items-center pt-8">
          {/* first part */}
          <div className="flex flex-col gap-4 md:gap-0 text-center md:text-left">
            <h1>Fullstack<br />developer<br />from the Netherlands<span className="text-yellow-500">.</span></h1>
            <p>I'm Justian Spijkerbosch. An 18 year old fullstack developer from the Netherlands,<br />i'm well known with a lot of programming technologies, like Next.JS and NestJS.</p>
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
            <img className="rounded-lg w-3/5 z-10" src={"https://i.ibb.co/WyMq9c1/IMG-20210130-132723.jpg"} />
          </div>
        </div>
        {/* intro section */}
        <div className="bg-blue-50 my-16 max-w-full">
          <div className="max-w-7xl mx-auto px-4 xl:px-0 flex flex-col py-16 lg:py-0 lg:flex-row justify-between items-center gap-8 lg:gap-32 lg:h-96 lg:mt-80 xl:mt-64 lg:mb-72 xl:mb-48">
            {/* left content */}
            <div className="flex flex-col gap-3">
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
            <div>
              <div className="flex flex-col lg:flex-row items-center gap-8">
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
        <div className="max-w-7xl mx-auto px-4 xl:px-0 pt-0 xl:pt-16 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* solo project
          TODO: MAP OVER ALL PROJECTS USING FRONTMATTER */}
          <div className="grid-col-1 flex flex-col gap">
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
          <div className="grid-col-1 rounded-lg" style={{backgroundImage: "url(https://media-cdn.tripadvisor.com/media/photo-p/14/06/a3/3d/photo0jpg.jpg)", backgroundSize: 'cover'}}>
            <div className="p-8 bg-gray-900 rounded-lg">
              <h3 className="text-white">Starbucks</h3>
              <p className="text-white">Project for starbucks. I created their API. Created this project using NextJS and NestJS. And did it with someone else.</p>
              <p className="text-white pt-4">
                <Link href={"/projects/slug"}>
                  Read more
                </Link>
              </p>
            </div>
          </div>
          <div className="grid-col-1 rounded-lg" style={{backgroundImage: "url(https://media-cdn.tripadvisor.com/media/photo-p/14/06/a3/3d/photo0jpg.jpg)", backgroundSize: 'cover'}}>
            <div className="p-8 bg-gray-900 rounded-lg">
              <h3 className="text-white">Starbucks</h3>
              <p className="text-white">Project for starbucks. I created their API. Created this project using NextJS and NestJS. And did it with someone else.</p>
              <p className="text-white pt-4">
                <Link href={"/projects/slug"}>
                  Read more
                </Link>
              </p>
            </div>
          </div>
          <div className="grid-col-1 rounded-lg" style={{backgroundImage: "url(https://media-cdn.tripadvisor.com/media/photo-p/14/06/a3/3d/photo0jpg.jpg)", backgroundSize: 'cover'}}>
            <div className="p-8 bg-gray-900 rounded-lg">
              <h3 className="text-white">Starbucks</h3>
              <p className="text-white">Project for starbucks. I created their API. Created this project using NextJS and NestJS. And did it with someone else.</p>
              <p className="text-white pt-4">
                <Link href={"/projects/slug"}>
                  Read more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
  )
}
