import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col-reverse gap-8 items-center justify-center md:flex-row justify-center md:justify-between items-center pt-8">
      {/* first part */}
      <div className="flex flex-col text-center md:text-left">
        <h1>Fullstack<br />developer<br />from the Netherlands<span className="text-yellow-500">.</span></h1>
        <p>I'm Justian Spijkerbosch. An 18 year old fullstack developer from the Netherlands,<br />i'm well known with a lot of programming technologies, like Next.JS and NestJS.</p>
        <div>
          <Link href={"/about"}>
            <button class={"button primary mt-4"}>
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
  )
}
