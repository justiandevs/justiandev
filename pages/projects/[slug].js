import {Seo} from "../../components/seo/Seo";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Link from "next/link";
import {FaLink, FaLinkedin} from "react-icons/fa";

export default function Slug({ frontmatter, content }) {
    console.log(frontmatter);

    return (
        <>
            <Seo title={frontmatter.title} description={frontmatter.description} />
            {/* blue hero */}
            <header className="bg-blue-50 h-48"></header>
            {/* box */}
            <section className="max-w-7xl mx-auto px-4 xl:px-0 mx-4 xl:mx-auto bg-white rounded-lg bg-white -mt-24">
                <div className="p-12">
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 flex-row items-center justify-between">
                            <h1>{frontmatter.title}<span className="text-yellow-500">.</span></h1>
                            <a href={`${frontmatter.link}`} className="cursor-pointer">
                                <div className="flex hidden md:flex flex-row gap-2 items-center text-2xl rounded-full bg-blue-50 py-2 px-4 transition duration-200 focus:bg-blue-900 focus:text-white active:bg-blue-900 active:text-white hover:bg-blue-900 hover:text-white ">
                                    <FaLink />
                                    <p className="text-lg">Site</p>
                                </div>
                            </a>
                        </div>
                        <p>{frontmatter.description}</p>
                    </div>
                    <div className="mt-4 flex flex-col gap-4">
                        <div className="rounded-lg w-full h-96" style={{backgroundImage: `url(../${frontmatter.image})`, backgroundSize: "cover"}}></div>
                        <div className="mt-4 transition duration-200 tailwind-markdown prose-p:mb-0 prose-headings:mb-1 prose-headings:mt-0 prose-h1:mt-4 prose-h2:text-4xl prose-h3:text-2xl prose-h3:mt-4 prose-p:text-lg prose-p:mb-0 prose-headings:text-blue-900 prose-code:mb-0 prose-code:mt-0 prose-a:text-yellow-500 hover:prose-a:text-blue-900 prose-a:text-lg prose-a:no-underline prose-ol:text-lg prose-ul:text-lg prose-li:text-lg" dangerouslySetInnerHTML={{__html: md().render(content)}} />
                    </div>
                    <div className="py-4">
                        <h3>Techniques I used</h3>
                        <div className="flex flex-col md:flex-row gap-2 mt-2">
                            {frontmatter.tags.map((tag) => {
                                return (
                                    <div key={tag} className="px-3 py-2 bg-yellow-500 rounded-lg">
                                        {tag}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync("projects");

    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', '')
        }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params: { slug }}) {
  const fileName = fs.readFileSync(`projects/${slug}.md`, 'utf-8');

  const { data: frontmatter, content } = matter(fileName);

  return {
      props: {
          frontmatter,
          content
      }
  }
};