import {NextSeo} from "next-seo";

export function Seo({ title, description }) {
    return (
        <NextSeo
          title={`${title} - Justian Spijkerbosch`}
          description={description}
          canonical="https://justian.dev"
          openGraph={{
              url: 'https://justian.dev',
              title: `${title} - Justian Spijkerbosch`,
              description: description,
              site_name: "Justiandev"
          }}
          twitter={{
              handle: "JustianSpijker8",
              site: "https://justian.dev",
              cardType: 'summary'
          }}
        />
    )
}