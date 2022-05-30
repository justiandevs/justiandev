import {Navigation} from "../navigation";

export function LayoutView({ children, height }) {
    return (
        <>
            {/* navigation */}
            <Navigation />
            {/* main content */}
            <section className="max-w-7xl mx-auto px-4 lg:px-0" style={{paddingTop: height}}>
                {children}
            </section>
            {/* footer */}
            <div className="">
                Footer
            </div>
        </>
    )
}