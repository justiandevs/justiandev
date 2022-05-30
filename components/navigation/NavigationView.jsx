import Image from 'next/image';
import logo from '../../public/color_svg_logo.svg';
import Link from "next/link";

export function NavigationView({ yOffset }) {
    return (
        <nav className={`py-6 fixed left-0 right-0 ${yOffset > 40 ? ('bg-white shadow-sm py-2') : ('py-6')}`} id="nav">
            <div className="flex flex-row justify-between items-center max-w-7xl mx-auto px-4 lg:px-0">
                {/* left part of navigation */}
                <Link href={"/"}>
                    <div className="w-12 cursor-pointer">
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
                    <div>
                        <Link href={"/contact"}>
                            <button className="button">
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}