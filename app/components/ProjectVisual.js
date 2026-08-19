import Image from "next/image";

function MergeVisual() {
  return (
    <div className="project-cover project-cover--merge" aria-hidden="true">
      <Image
        className="merge-cover__store"
        src="/images/projects/degen-merge-store.webp"
        alt=""
        fill
        sizes="(max-width: 760px) 100vw, 33vw"
      />
      <div className="mobile-shot mobile-shot--menu">
        <Image
          src="/images/projects/degen-merge-menu.webp"
          alt=""
          fill
          sizes="120px"
        />
      </div>
      <div className="mobile-shot mobile-shot--gameplay">
        <Image
          src="/images/projects/degen-merge-gameplay.webp"
          alt=""
          fill
          sizes="140px"
        />
      </div>
      <div className="merge-cover__proof">
        <span>Solana Mobile</span>
        <b>5.0 / Shipped</b>
      </div>
    </div>
  );
}

function SeekerHubVisual() {
  return (
    <BrowserCover
      src="/images/projects/seekerhub-home.webp"
      label="seeker-hub.lololabs.xyz"
      className="project-cover--seekerhub"
    />
  );
}

function CatalogVisual() {
  return (
    <BrowserCover
      src="/images/projects/dapport-home.webp"
      label="dapport.app"
      className="project-cover--dapport"
    />
  );
}

function CleanerVisual() {
  return (
    <div className="project-cover project-cover--wallet" aria-hidden="true">
      <div className="mobile-shot wallet-shot wallet-shot--tokens">
        <Image
          src="/images/projects/wallet-cleaner-tokens.webp"
          alt=""
          fill
          sizes="90px"
        />
      </div>
      <div className="mobile-shot wallet-shot wallet-shot--nfts">
        <Image
          src="/images/projects/wallet-cleaner-nfts.webp"
          alt=""
          fill
          sizes="90px"
        />
      </div>
      <div className="mobile-shot wallet-shot wallet-shot--home">
        <Image
          src="/images/projects/wallet-cleaner-home.webp"
          alt=""
          fill
          sizes="120px"
        />
      </div>
      <div className="wallet-cover__label">
        <span>Android build</span>
        <b>In development</b>
      </div>
    </div>
  );
}

function TacticsVisual() {
  return (
    <BrowserCover
      src="/images/projects/degen-tactics-gameplay.webp"
      secondarySrc="/images/projects/degen-tactics-chapters.webp"
      label="degen-tactics.lololabs.xyz"
      className="project-cover--tactics"
    />
  );
}

function TwitchVisual() {
  return (
    <BrowserCover
      src="/images/projects/twitch-solana-home.webp"
      label="paninyls.lololabs.xyz"
      className="project-cover--twitch"
    />
  );
}

function BrowserCover({ src, secondarySrc, label, className }) {
  return (
    <div className={`project-cover project-cover--browser ${className}`} aria-hidden="true">
      <div className="browser-cover__chrome">
        <span><i /><i /><i /></span>
        <b>{label}</b>
      </div>
      <div className="browser-cover__screen">
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
        />
      </div>
      {secondarySrc ? (
        <div className="browser-cover__secondary">
          <Image src={secondarySrc} alt="" fill sizes="140px" />
          <span>Training</span>
        </div>
      ) : null}
    </div>
  );
}

export default function ProjectVisual({ type }) {
  const visuals = {
    merge: <MergeVisual />,
    seekerhub: <SeekerHubVisual />,
    catalog: <CatalogVisual />,
    cleaner: <CleanerVisual />,
    tactics: <TacticsVisual />,
    twitch: <TwitchVisual />,
  };

  return <div className={`project-visual project-visual--${type}`}>{visuals[type]}</div>;
}
