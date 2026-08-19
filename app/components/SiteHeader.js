import { profile } from "../data/portfolio";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <a className="brand-mark" href="#top" aria-label="Back to top">
          <span className="brand-mark__symbol">LD</span>
          <span className="brand-mark__name">{profile.brand}</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a className="site-nav__contact" href={profile.links.email}>
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
