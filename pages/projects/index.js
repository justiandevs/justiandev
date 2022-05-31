import {Seo} from "../../components/seo/Seo";
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {ProjectsContainer} from "../../components/projects/ProjectsContainer";

export default function Projects() {
    return (
        <>
            <Seo title={"Projects"} description={"This are all the projects I worked on from the last period. See the work I contributed to opensource projects, but also private projects."} />
            {/* blue hero */}
            <header className="bg-blue-50 h-48"></header>
            {/* box */}
            <section className="max-w-7xl mx-auto px-4 xl:px-0 mx-4 xl:mx-auto bg-white rounded-lg bg-white -mt-24">
                <div className="p-12">
                    <div className="flex flex-col gap-1">
                        <h1>Projects<span className="text-yellow-500">.</span></h1>
                        <p>This is a short overview of the last projects I worked on, click on a project to see more information about that project.</p>
                    </div>
                    <div className="mt-8 flex flex-col gap-2">
                        <ProjectsContainer />
                    </div>
                </div>
            </section>
        </>
    )
}