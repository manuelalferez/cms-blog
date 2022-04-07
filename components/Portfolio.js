import Link from "next/link";

const Portfolio = ({ projects }) => {
  let projectList = [];

  projects.map((element) => {
    let technologies = [];
    element.data.technologies.map((technology) => {
      technologies.push(
        <li className="badge mr-1">{technology.item[0].text}</li>
      );
    });

    projectList.push(
      <div class="mockup-window border w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src={element.data.image.url}
            className="h-72 w-full object-cover"
          />
        </figure>

        <div class="card-body items-center text-center">
          <h2 class="card-title">{element.data.title[0].text}</h2>
          <p className="h-20">{element.data.description[0].text}</p>
          <span>{technologies}</span>
          <div class="card-actions mt-4">
            <a
              class="btn btn-primary"
              href={element.data.website[0].text}
              target="_blank"
            >
              Website
            </a>
            <a
              class="btn btn-primary"
              href={element.data.github[0].text}
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="portfolio p-8 pt-4">
      <div class="flex flex-col w-full border-opacity-50">
        <div class="flex flex-wrap w-full mb-10">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0 mt-10">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Portfolio
            </h1>
            <div class="h-1 w-20 bg-mygreen rounded"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap">{projectList}</div>
    </div>
  );
};

export default Portfolio;
