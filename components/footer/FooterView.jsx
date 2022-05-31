import Link from "next/link";
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

export function FooterView() {
    return (
        <footer className={"max-w-7xl mx-auto px-4 xl:px-0 pb-16"}>
            {/* get in contact part of footer */}
            <div className="bg-blue-50 md:p-12 p-8 mb-16 rounded-lg flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 lg:items-center">
                <div className="flex flex-col gap-1">
                    <h2>Interested in <span className="text-yellow-500">my work?</span></h2>
                    <p>I am available at the moment, so maybe I can help you with your new project.</p>
                </div>
                <div>
                    <Link href={"/contact"}>
                        <button className={"button secondary"}>
                            Get in touch with me
                        </button>
                    </Link>
                </div>
            </div>
            {/* real footer part */}
            <div className={"flex flex-col gap-4 items-center"}>
                <p className="font-medium">Copyright 2022 {new Date().getFullYear() === 2022 ? ('') : (`- ${new Date().getFullYear()}`)} | Justian Spijkerbosch</p>
                <div className="text-xl flex flex-row gap-3 text-blue-900">
                    <a href={"https://instagram.com/justiansp"} className="transition duration-200 hover:text-yellow-500 active:text-yellow-500 focus:text-yellow-500">
                        <FaInstagram />
                    </a>
                    <a href={"https://linkedin.com/in/justian-spijkerbosch-a4b74118b"} className="transition duration-200 hover:text-yellow-500 active:text-yellow-500 focus:text-yellow-500">
                        <FaLinkedin />
                    </a>
                    <a href={"https://github.com/justiandevs"} className="transition duration-200 hover:text-yellow-500 active:text-yellow-500 focus:text-yellow-500">
                        <FaGithub />
                    </a>
                    <a href={"mailto:justiandev@gmail.com"} className="transition duration-200 hover:text-yellow-500 active:text-yellow-500 focus:text-yellow-500">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    )
}