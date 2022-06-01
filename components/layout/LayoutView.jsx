import {Navigation} from "../navigation";
import {Footer} from "../footer";
import {Head} from "next/document";

export function LayoutView({ children, height }) {
    return (
        <>
            {/* navigation */}
            <Navigation />
            {/* main content */}
            <section className="" style={{paddingTop: height}}>
                <div className={"pb-16"}>
                    {children}
                </div>
            </section>
            {/* footer */}
            <Footer />
        </>
    )
}