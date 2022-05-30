import {Navigation} from "../navigation";
import {Footer} from "../footer";

export function LayoutView({ children, height }) {
    return (
        <>
            {/* navigation */}
            <Navigation />
            {/* main content */}
            <section className="max-w-7xl mx-auto px-4 xl:px-0" style={{paddingTop: height}}>
                <div className={"pb-16"}>
                    {children}
                </div>
            </section>
            {/* footer */}
            <Footer />
        </>
    )
}