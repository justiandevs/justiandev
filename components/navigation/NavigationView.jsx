import Image from 'next/image';
import logo from '../../public/color_svg_logo.svg';
import Link from "next/link";

export function NavigationView({ yOffset }) {
    return (
        <nav className={`py-6 z-50 fixed left-0 right-0 ${yOffset > 40 ? ('bg-white shadow-sm py-4 md:py-2') : ('py-6')}`} id="nav">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center max-w-7xl mx-auto px-4 xl:px-0">
                {/* left part of navigation */}
                <Link href={"/"}>
                    <div className={`w-12 cursor-pointer ${yOffset > 40 ? ('hidden md:flex') : ('flex')}`}>
                        <Image src={logo} />
                    </div>
                </Link>
                {/* right part of navigation */}
                <div className="flex flex-row gap-10 items-center">
                    <div className="link">
                        <Link href={"/about"}>
                            About me
                        </Link>
                    </div>
                    <div className="link">
                        <Link href={"/projects"}>
                            Projects
                        </Link>
                    </div>
                    <div className={"hidden md:flex"}>
                        <Link href={"/contact"}>
                            <button className="button primary">
                                Contact
                            </button>
                        </Link>
                    </div>
                    <div className={"flex md:hidden"}>
                        <Link href={"/contact"}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}