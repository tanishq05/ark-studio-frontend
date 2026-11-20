
import "./ProjectsPage.css";

const projectImages = Object.entries(
  import.meta.glob("../assets/images/our-projects/*.{jpg,jpeg,png}", {
    eager: true,
    query: "?url",
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, image]) => ({
    image: image as string,
    name: `Project ${String(
      path.match(/(\d+)(?=\.[^.]+$)/)?.[1] ?? ""
    ).padStart(2, "0")}`,
  }));

function ProjectsPage() {
  return (
    <section className="projects-page">
      <div className="projects-page-container">
        <div className="projects-page-heading">
          {/* <span>ARK STUDIO BY LOHAR CREATIONS</span> */}
          <h1>Our Projects</h1>
          <p>
            A collection of thoughtfully crafted outdoor spaces,
            designed to inspire and made to last.
          </p>
        </div>

        <div className="projects-page-grid">
          {projectImages.map((project, index) => (
            <article className="projects-page-card" key={project.image}>
              <div className="projects-page-image">
                <img
                  src={project.image}
                  alt={project.name}
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>

              <h2>{project.name}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
