import Image from "next/image";
import { LuArrowDownRight, LuArrowUpRight, LuMail } from "react-icons/lu";
import { profile } from "../data/portfolio";

const socialLinks = [
  { label: "GitHub", href: profile.links.github },
  { label: "X", href: profile.links.twitter },
  { label: "LinkedIn", href: profile.links.linkedin },
];

export default function HeroSection() {
  return (
    <section className="hero shell" id="top" aria-labelledby="hero-title">
      <div className="hero__copy">
        <div className="availability-pill">
          <span className="availability-pill__dot" aria-hidden="true" />
          {profile.availability}
        </div>

        <p className="eyebrow">{profile.name} / {profile.brand}</p>
        <h1 id="hero-title">
          Fullstack developer.
          <span> Solana &amp; mobile builder.</span>
        </h1>
        <p className="hero__summary">{profile.summary}</p>

        <div className="hero__actions">
          <a className="button button--primary" href={profile.links.email}>
            <LuMail aria-hidden="true" />
            Start a conversation
          </a>
          <a className="button button--secondary" href="#work">
            Explore selected work
            <LuArrowDownRight aria-hidden="true" />
          </a>
        </div>

        <div className="hero__socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
              <LuArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="hero__portrait-column" aria-label="Portrait of Loic Dlugosz">
        <div className="portrait-frame">
          <div className="portrait-frame__halo" aria-hidden="true" />
          <Image
            src="/images/my-photo.jpg"
            alt="Loic Dlugosz"
            width={667}
            height={645}
            sizes="(max-width: 767px) 78vw, (max-width: 1199px) 38vw, 420px"
          />
          <div className="portrait-frame__label">
            <span>Build</span>
            <span aria-hidden="true">→</span>
            <span>Test</span>
            <span aria-hidden="true">→</span>
            <span>Ship</span>
          </div>
        </div>
        <p className="portrait-caption">
          <span>Web</span>
          <span>Mobile</span>
          <span>On-chain</span>
        </p>
      </div>

      <div className="hero__proof" aria-label="How Loic works">
        <p><span>01</span> Product thinking</p>
        <p><span>02</span> End-to-end engineering</p>
        <p><span>03</span> Real-world shipping</p>
      </div>
    </section>
  );
}
