import Layout from "../components/Layout.js";
import { client } from "../config/prismic-configuration";
import Prismic from "prismic-javascript";
import Hero from "../components/Hero.js";
import Portfolio from "../components/Portfolio.js";
import FeaturedPosts from "../components/FeaturedPosts.js";

const Index = ({ about, projects, featuredPosts }) => {
  return (
    <div data-theme="emerald">
      <Layout>
        <Hero about={about} />
        <Portfolio projects={projects} />
        <FeaturedPosts featuredPosts={featuredPosts} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const about = await client.getSingle("about");
  const projects = await client.query(
    Prismic.Predicates.at("document.type", "portfolio")
  );
  const featuredPosts = await client.query(
    Prismic.Predicates.at("document.type", "featured-post")
  );

  return {
    props: {
      about: about.data.description,
      projects: projects.results,
      featuredPosts: featuredPosts.results.sort((a, b) => {
        const aDate = new Date(a.data.date);
        const bDate = new Date(b.data.date);
        return aDate < bDate ? 1 : -1;
      }),
    },
  };
};

export default Index;
