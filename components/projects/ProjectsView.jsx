import Link from "next/link";

export function ProjectsView({ projects }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
                return (
                    <Link href={`/projects/${project.slug}`}>
                        <div className="col-span-1 rounded-lg cursor-pointer group" style={{backgroundImage: `url(${project.frontmatter.image})`, backgroundSize: 'cover'}}>
                            <div className="p-8 transition duration-200 group-hover:bg-blue-900 bg-gray-900 rounded-lg custom-opacity-background">
                                <h3 className="text-white">{project.frontmatter.title}</h3>
                                <p className="text-white">{project.frontmatter.description}</p>
                                <p className="text-white pt-4 transition duration-200 group-hover:text-yellow-400">
                                    <Link href={`/projects/${project.slug}`}>
                                        Read more
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}