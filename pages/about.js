export default function About() {
    return (
        <>
            {/* hero */}
            <section className="max-w-7xl mx-auto px-4 xl:px-0 flex justify-center text-center py-16">
                <h1>Developer of <br />the future<span className="text-yellow-500">.</span></h1>
            </section>
            {/* images */}
            <section className="lg:grid-cols-3 xl:grid-cols-[1fr_1280px_1fr] gap-8 hidden lg:grid">
                <div className="col-span-1 hidden xl:flex rounded-r-lg transform scale-y-90" style={{backgroundImage: "url(https://i.ibb.co/SR1hx8y/pexels-josh-meeder-1472386-1.jpg)", backgroundSize: "cover"}}>
                    <div className="w-full h-full rounded-r-lg custom-opacity-background-light"></div>
                </div>
                <div className="lg:col-span-3 xl:col-span-1 grid grid-cols-3 gap-8">
                    <div className="col-span-1 lg:rounded-r-lg xl:rounded-lg h-96" style={{backgroundImage: "url(https://i.ibb.co/qyZSg3Q/IMG-20210202-163422-736.jpg)", backgroundSize: "cover"}}>
                        <div className="w-full h-full lg:rounded-r-lg xl:rounded-lg custom-opacity-background-light"></div>
                    </div>
                    <div className="col-span-1 rounded-lg" style={{backgroundImage: "url(https://i.ibb.co/xHBNWv7/IMG-20210123-085851-641.jpg)", backgroundSize: "cover"}}>
                        <div className="w-full h-full rounded-lg custom-opacity-background-light"></div>
                    </div>
                    <div className="col-span-1 lg:rounded-l-lg xl:rounded-lg" style={{backgroundImage: "url(https://i.ibb.co/zfkYr7s/IMG-20210130-132723.jpg)", backgroundSize: "cover"}}>
                        <div className="w-full h-full lg:rounded-l-lg xl:rounded-lg custom-opacity-background-light"></div>
                    </div>
                </div>
                <div className="col-span-1 hidden xl:flex rounded-l-lg transform scale-y-90" style={{backgroundImage: "url(https://i.ibb.co/JnyKc8q/pexels-s-migaj-747964.jpg)", backgroundSize: "cover"}}>
                    <div className="w-full h-full rounded-l-lg custom-opacity-background-light"></div>
                </div>
            </section>
        </>
    )
}