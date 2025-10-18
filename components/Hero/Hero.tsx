import css from './Hero.module.scss';

interface HeroProps {
  tagline: string;
  headline: string;
  description: string;
  videoUrl?: string;
}

export default function Hero({ tagline, headline, description, videoUrl = '/videos/hero-bg.webm' }: HeroProps) {
  return (
    <section className={css.hero} id="hero">
      {/* Background Video */}
      <video className={css.heroVideo} autoPlay muted loop playsInline>
        <source src={videoUrl} type="video/webm" />
      </video>
      
      {/* Background Overlay */}
      <div className={css.heroOverlay}></div>
      
      <div className={css.heroContent}>
        <div className={css.heroTagline}>
          <span className="gradient-text">{tagline}</span>
        </div>
        <h1 className={css.heroHeadline}>{headline}</h1>
        <p className={css.heroDescription}>{description}</p>
      </div>
    </section>
  );
}

