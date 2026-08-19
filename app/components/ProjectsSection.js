import { LuArrowUpRight, LuCheck, LuCode2 } from "react-icons/lu";
import { projects } from "../data/portfolio";
import ProjectVisual from "./ProjectVisual";

export default function ProjectsSection() {
  return (
    <section className="section section--work shell" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="eyebrow">Selected work / 06</p>
        <h2 id="work-title">Built to be used, played and shipped.</h2>
        <p>
          A focused selection across Solana, mobile, games and builder tooling.
          Each project solves a concrete problem and goes beyond the interface.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className={`project-card accent-${project.accent}`} key={project.slug}>
            <div className="project-card__meta">
              <span>{String(index + 1).padStart(2, "0")} / {project.category}</span>
              <span className="status"><i aria-hidden="true" />{project.status}</span>
            </div>

            <ProjectVisual type={project.visual} />

            <div className="project-card__content">
              <h3>{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <p className="project-card__contribution">
                <span>Built</span> {project.contribution}
              </p>
              <ul className="tech-list" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              {project.note ? (
                <p className="project-note"><LuCheck aria-hidden="true" />{project.note}</p>
              ) : null}
            </div>

            <footer className="project-card__footer">
              {project.actions.length > 0 ? (
                <div className="project-actions">
                  {project.actions.map((action) => (
                    <a href={action.url} target="_blank" rel="noreferrer" key={action.label}>
                      {action.kind === "code" ? <LuCode2 aria-hidden="true" /> : null}
                      {action.label}
                      <LuArrowUpRight aria-hidden="true" />
                    </a>
                  ))}
                </div>
              ) : null}
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
