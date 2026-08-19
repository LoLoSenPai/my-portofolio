import { skills } from "../data/portfolio";

export default function SkillsSection() {
  return (
    <section className="section shell" id="stack" aria-labelledby="stack-title">
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">Capabilities / 04</p>
          <h2 id="stack-title">A stack shaped around products.</h2>
        </div>
        <p>
          From a blank page to a deployed product: interface, business logic,
          infrastructure, mobile delivery and Solana integrations.
        </p>
      </div>

      <div className="capabilities-grid">
        {skills.map((skill) => (
          <article className="capability" key={skill.category}>
            <div className="capability__header">
              <span>{skill.index}</span>
              <h3>{skill.category}</h3>
            </div>
            <p>{skill.description}</p>
            <ul>
              {skill.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
