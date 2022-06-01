import {Seo} from "../components/seo/Seo";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

export default function Contact() {
    return (
        <>
            <Seo title={"Contact"} description={"Want to get in touch with me? Don't hesitate to send a mail or message me on one of the under here written platforms."} />
            {/* blue hero */}
            <header className="bg-blue-50 h-48"></header>
            {/* box */}
            <section className="max-w-7xl mx-auto px-4 xl:px-0 mx-4 xl:mx-auto bg-white rounded-lg bg-white -mt-24">
                <div className="p-12">
                    <div className="flex flex-col gap-1">
                        <h1>Contact<span className="text-yellow-500">.</span></h1>
                        <p>If you have any questions, or if you are curious as to what I can do for your (new) project? Do not hesitate and contact me. You can e-mail me using <a href="mailto:justiandev@gmail.com" className="link text-yellow-500 font-medium">justiandev@gmail.com</a>. Or use one of the options below to contact me.</p>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <h3>Socials</h3>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                            <div className="flex flex-col gap-4">
                                <a href="https://github.com/justiandevs" className="group flex flex-row gap-2 items-center">
                                    <div className="rounded-full bg-blue-50 p-2 transition duration-200 group-hover:bg-blue-900 group-hover:text-white">
                                        <FaGithub />
                                    </div>
                                    <p>Github</p>
                                </a>
                                <a href="https://instagram.com/justiansp" className="group flex flex-row gap-2 items-center">
                                    <div className="rounded-full bg-blue-50 p-2 transition duration-200 group-hover:bg-blue-900 group-hover:text-white">
                                        <FaInstagram />
                                    </div>
                                    <p>Instagram</p>
                                </a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a href="https://twitter.com/JustianSpijker8" className="group flex flex-row gap-2 items-center">
                                    <div className="rounded-full bg-blue-50 p-2 transition duration-200 group-hover:bg-blue-900 group-hover:text-white">
                                        <FaTwitter />
                                    </div>
                                    <p>Twitter</p>
                                </a>
                                <a href="https://www.linkedin.com/in/justian-spijkerbosch-a4b74118b/" className="group flex flex-row gap-2 items-center">
                                    <div className="rounded-full bg-blue-50 p-2 transition duration-200 group-focus:bg-blue-900 group-focus:text-white group-active:bg-blue-900 group-active:text-white group-hover:bg-blue-900 group-hover:text-white ">
                                        <FaLinkedin />
                                    </div>
                                    <p>Linkedin</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}