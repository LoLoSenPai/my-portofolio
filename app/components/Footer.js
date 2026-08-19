import { LuArrowUpRight, LuMail } from "react-icons/lu";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer shell">
      <div className="footer__callout">
        <p className="eyebrow">Have a product to ship?</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>
          I&apos;m open to freelance missions and collaborations across web,
          mobile and the Solana ecosystem.
        </p>
        <a className="button button--primary" href={profile.links.email}>
          <LuMail aria-hidden="true" />
          {profile.email}
        </a>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div>
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub <LuArrowUpRight aria-hidden="true" /></a>
          <a href={profile.links.twitter} target="_blank" rel="noreferrer">X <LuArrowUpRight aria-hidden="true" /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <LuArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
