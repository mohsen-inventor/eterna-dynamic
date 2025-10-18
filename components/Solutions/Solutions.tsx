import styles from './Solutions.module.scss';

interface SolutionsProps {
  badgeText: string;
  title: string;
  subtitle: string;
  problems: string[];
  solutions: string[];
  cosmosVideoUrl?: string;
}

export default function Solutions({
  badgeText,
  title,
  subtitle,
  problems,
  solutions,
  cosmosVideoUrl = '/videos/cosmos.webm'
}: SolutionsProps) {
  return (
    <section className={`${styles.solutions} solutions`} id="solutions">
      <div className="container">
        <div className={`${styles.solutions__header} solutions__header`}>
          <div className={styles.solutions__badge}>
            <svg className={styles.solutions__badgeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor"/>
            </svg>
            <span>{badgeText}</span>
          </div>
          <h2 className={styles.solutions__title}>{title}</h2>
          <div className={styles.solutions__subtitle}>
            <span className={styles.gradientText}>{subtitle}</span>
          </div>
        </div>
        
        <div className={styles.solutions__content}>
          {/* Problems Column */}
          <div className={`${styles.solutions__column} ${styles.solutions__problems} solutions__problems`}>
            {problems.map((problem, idx) => (
              <div key={idx} className={`${styles.solutions__card} solutions__card`}>
                <div className={`${styles.solutions__cardIcon} ${styles.solutions__cardIconNegative}`}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 9L9 15M9 9L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <p className={styles.solutions__cardText}>{problem}</p>
              </div>
            ))}
          </div>

          {/* Cosmos Animation Column */}
          <div className={styles.solutions__center}>
            <div className={`${styles.solutions__cosmos} solutions__cosmos`}>
              <video className={styles.solutions__cosmosVideo} autoPlay muted loop playsInline>
                <source src={cosmosVideoUrl} type="video/webm" />
              </video>
            </div>
          </div>
          
          {/* Solutions Column */}
          <div className={`${styles.solutions__column} ${styles.solutions__solutions} solutions__solutions`}>
            {solutions.map((solution, idx) => (
              <div key={idx} className={`${styles.solutions__card} solutions__card`}>
                <div className={`${styles.solutions__cardIcon} ${styles.solutions__cardIconPositive}`}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <p className={styles.solutions__cardText}>{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
