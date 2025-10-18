import styles from './Process.module.scss';

interface ProcessFunction {
  name: string;
  items: string[];
}

interface ProcessProps {
  badgeText: string;
  title: string;
  tagline: string;
  description: string;
  functions: ProcessFunction[];
}

export default function Process({ badgeText, title, tagline, description, functions }: ProcessProps) {
  return (
    <section className={`${styles.process} process`} id="process">
      <div className="container">
        <div className={`${styles.process__header} process__header`}>
          <div className={styles.process__badge}>
            <svg className={styles.process__badgeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>{badgeText}</span>
          </div>
          <h2 className={styles.process__title}>{title}</h2>
          <div className={styles.process__tagline}>
            <span className={styles.gradientText}>{tagline}</span>
          </div>
          <p className={styles.process__description}>{description}</p>
        </div>
        
        <div className={styles.process__contentWrapper}>
          <div className={styles.process__functions}>
            {functions.map((func, idx) => (
              <div key={idx} className={`${styles.process__function} process__function`}>
                <div className={styles.process__functionHeader}>
                  <div className={styles.process__functionCircle}></div>
                  <span className={styles.process__functionTitle}>{func.name}</span>
                </div>
                <div className={styles.process__functionContent}>
                  <div className={styles.process__functionLine}></div>
                  <ul className={styles.process__functionItems}>
                    {func.items.map((item, itemIdx) => (
                      <li key={itemIdx} className={styles.process__functionItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Wavy Gradient Graphic */}
          <div className={`${styles.process__wave} process__wave`}>
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/wave-v.avif" />
              <img src="/images/wave-h.png" alt="Decorative wave graphic" className={styles.process__waveImage} />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
