import styles from './Hero.module.scss';

interface HeroProps {
  tagline: string;
  headline: string;
  description: string;
  videoUrl?: string;
}

export default function Hero({ tagline, headline, description, videoUrl = '/videos/hero-bg.webm' }: HeroProps) {
  return (
    <section className={styles.hero} id="hero">
      {/* Background Video */}
      <video className={styles.hero__video} autoPlay muted loop playsInline>
        <source src={videoUrl} type="video/webm" />
      </video>
      
      {/* Background Overlay */}
      <div className={styles.hero__overlay}></div>
      
      <div className={styles.hero__content}>
        <div className={styles.hero__tagline}>
          <span className={styles.gradientText}>{tagline}</span>
        </div>
        <h1 className={styles.hero__headline}>{headline}</h1>
        <p className={styles.hero__description}>{description}</p>
      </div>
    </section>
  );
}

