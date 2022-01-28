import Link from "next/link";

const Portfolio = ({ projects }) => {
  let projectList = [];

  projects.map((element) => {
    let technologies = [];
    element.data.technologies.map((technology) => {
      technologies.push(
        <li className="p-1 bg-myblack text-white rounded-lg m-1 font-mono text-sm">
          {technology.item[0].text}
        </li>
      );
    });

    projectList.push(
      <div className="border-4 border-mypink rounded mb-8 md:w-5/12 xl:w-4/12">
        <img src={element.data.image.url} class="w-full h-40 object-cover" />
        <div className="p-2 px-4">
          <h2>{element.data.title[0].text}</h2>
          <p>{element.data.description[0].text}</p>
          <ul className="flex flex-wrap mt-4">{technologies}</ul>
          <div className="flex justify-center">
            <Link href={element.data.website[0].text}>
              <a target="_blank">Website</a>
            </Link>
            <Link href={element.data.github[0].text}>
              <a target="_blank">GitHub</a>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="portfolio p-8 pt-4">
      <span className="lg:flex lg:justify-center">
        <h1 className="font-display text-xl md:text-xl lg:text-2xl mb-4">
          Portfolio
        </h1>
      </span>
      <div className="md:flex md:justify-evenly flex-wrap	font-serif">
        {projectList}
      </div>
    </div>
  );
};

export default Portfolio;
