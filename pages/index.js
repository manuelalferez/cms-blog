import Layout from "../components/Layout.js";
import Link from "next/link";
import { client } from "../config/prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import About from "../components/About.js";
import Portfolio from "../components/Portfolio.js";
import FeaturedPosts from "../components/FeaturedPosts.js";

const Index = ({ postList, about, projects, featuredPosts }) => {
  return (
    <div>
      <Layout>
        <About about={about} />
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
