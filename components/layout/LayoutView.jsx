import {Navigation} from "../navigation";
import {Footer} from "../footer";
import {Head} from "next/document";

export function LayoutView({ children, height }) {
    return (
        <>
            {/* navigation */}
            <Navigation />
            {/* main content */}
            <section className="pt-44 md:pt-32">
                <div className={"pb-16"}>
                    {children}
                </div>
            </section>
            {/* footer */}
            <Footer />
        </>
    )
}