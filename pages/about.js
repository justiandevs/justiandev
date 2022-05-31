import Link from "next/link";
import {FaGraduationCap, FaSchool} from "react-icons/fa";

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
            {/* who I am section */}
            <section className="max-w-7xl mx-auto px-4 xl:px-0 grid grid-cols-1 md:grid-cols-4 pb-16 lg:py-16">
                <div className="col-span-1 hidden md:flex flex-col gap-4">
                    <h2>Who I<br /><span className="text-yellow-500">am.</span></h2>
                    <div className="hidden md:flex">
                        {/* TODO: Link to CV */}
                        <a href={"/cv.pdf"}>
                            <button className="button primary">
                                Download my cv
                            </button>
                        </a>
                    </div>
                </div>
                <div className="col-span-3">
                    <h3>I'm Justian</h3>
                    <p>I am Justian Spijkerbosch. A full-stack programmer from Apeldoorn, Netherlands. I have been a hobby programmer for a number of years and since mid 2021 I have been studying computer science in Utrecht, the Netherlands. Besides programming I like to play Handball and I am occasionally busy with light and sound technique. Besides that I also like to visit random things.</p>
                    <p className="mt-2">In my spare time, I also work in the evenings and sometimes during the day at the Hoge Veluwe National Park, behind the cash register. </p>
                    <h3 className="mt-4">Education</h3>
                    <p>I completed my higher general professional education (HAVO) in 2021 in the Netherlands. After this, I am going to study at the higher vocational education (HBO) focused on Computer Science, this study I will complete if everything goes well in 2024 after which I will get my Bachelor's degree in Computer Science.</p>
                    <p className="mt-2">During my study at the higher professional education I have always been a volunteer for my school as a light and sound technician, where I gained knowledge of the Behringer X32 and a Showtec 1024 Pro light table.</p>
                    <h3 className="mt-4">Programming</h3>
                    <p>I have been programming for about seven years now. The first few years were filled with making very simple sites with HTML, CSS and Javascript. But since a number of years, I have really taken up programming actively: A few years back, I started learning NodeJS and PHP and thus also learned to develop backend applications. At the moment, I have gained knowledge of programming languages such as PHP, Javascript and Python. And I can find my way in a lot of frontend frameworks like React, Svelte and Vue.JS.</p>
                    <p className="mt-2">What I like most is designing websites/webshops/webapps in a tool such as figma and then later realising this in a javascript library such as React using a CSS framework such as tailwind. To make it even more fun, I also like to build an API behind this to have the entire full stack experience built by myself.</p>
                </div>
            </section>
            {/* education section */}
            <section className="bg-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 xl:px-0 grid md:grid-cols-3 gap-8">
                    <div className="col-span-1 flex flex-col gap-1">
                        <h2>Education</h2>
                        <p>My complete education walktrough.</p>
                    </div>
                    <div className="col-span-2 flex flex-col gap-8">
                        <div className="bg-white rounded-lg p-8 flex flex-row gap-8">
                            <div className="text-yellow-500 text-4xl">
                                <FaSchool />
                            </div>
                            <div className="w-full">
                                <div className="flex flex-row items-center justify-between">
                                    <h3>Hogeschool Utrecht</h3>
                                    <span><span className="font-medium">Aug. 2021</span> - now</span>
                                </div>
                                <p>I'm currently studying Computer Science at the Hogeschool Utrecht in Utrecht, the Netherlands. If everything goes well I will get my bachelor in Computer Science at the middle of 2024.</p>
                                <p className="mt-2">At the Hogeschool of Utrecht, I am doing a study called OPEN-ICT. What this basically means is that I have 4 different periods per year where I work with a fixed group on a project per period. For the rest everything is relatively free: for example, I can choose what programming language I want to use and what user stories I want to tackle.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-8 flex flex-row gap-8">
                            <div className="text-yellow-500 text-4xl">
                                <FaGraduationCap />
                            </div>
                            <div className="w-full">
                                <div className="flex flex-row items-center justify-between">
                                    <h3>Veluws College Walterbosch</h3>
                                    <span className="font-medium">Aug. 2015 - July 2021</span>
                                </div>
                                <p>Veluws College Walterbosch was my secondary school. This was the place where I was introduced to programming and where I spent most of my currently memorable life. In six years time, I graduated with honours from the Higher General Secondary Education (HAVO). With a curriculum focused on the beta subjects (physics, chemistry and mathematics).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* skills */}
            <section className="max-w-7xl mx-auto px-4 xl:px-0 flex items-center flex-col gap-8 p-16">
                <div className="flex flex-col gap-1 text-center">
                    <h2>Skills</h2>
                    <p>A short overview of the programming languages/frameworks or tools I have knowledge of.</p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-16 items-center">
                    <img src="https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="Laravel"/>
                    <img src="https://the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png" alt="nodejs" />
                    <img src="https://docs.nestjs.com/assets/logo-small.svg" alt="nestjs" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png" alt="nextjs" />
                    <img src="https://cdn2.downdetector.com/static/uploads/logo/figma2.png" alt="figma" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" alt="php" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="vue" />
                </div>
            </section>
        </>
    )
}