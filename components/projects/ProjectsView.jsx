import Link from "next/link";

export function ProjectsView() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href={"/projects/project"}>
                <div className="col-span-1 rounded-lg cursor-pointer group" style={{backgroundImage: "url(images/starbucks.jpg)", backgroundSize: 'cover'}}>
                    <div className="p-8 transition duration-200 group-hover:bg-blue-900 bg-gray-900 rounded-lg custom-opacity-background">
                        <h3 className="text-white">Starbucks</h3>
                        <p className="text-white">Project for starbucks. I created their API. Created this project using NextJS and NestJS. And did it with someone else.</p>
                        <p className="text-white pt-4">
                            <Link href={"/projects/slug"}>
                                Read more
                            </Link>
                        </p>
                    </div>
                </div>
            </Link>
            <Link href={"/projects/project"}>
                <div className="col-span-1 group cursor-pointer rounded-lg" style={{backgroundImage: "url(images/starbucks.jpg)", backgroundSize: 'cover'}}>
                    <div className="p-8 transition duration-200 group-hover:bg-blue-900 rounded-lg custom-opacity-background">
                        <h3 className="text-white">Starbucks</h3>
                        <p className="text-white">Project for starbucks. I created their API. Created this project using NextJS and NestJS. And did it with someone else.</p>
                        <p className="text-white pt-4">
                            <Link href={"/projects/slug"}>
                                Read more
                            </Link>
                        </p>
                    </div>
                </div>
            </Link>
            <Link href={"/projects/project"}>
                <div className="col-span-1 group rounded-lg" style={{backgroundImage: "url(images/starbucks.jpg)", backgroundSize: 'cover'}}>
                    <div className="p-8 transition duration-200 group-hover:bg-blue-900 bg-gray-900 rounded-lg custom-opacity-background">
                        <h3 className="text-white">Starbucks</h3>
                        <p className="text-white">Project for starbucks. I created their API. Created this project using NextJS and NestJS. And did it with someone else.</p>
                        <p className="text-white pt-4">
                            <Link href={"/projects/slug"}>
                                Read more
                            </Link>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}