'use client';

import styles from './Services.module.scss';

interface Service {
  _id: string;
  stage: string;
  title: string;
  features: string[];
  order: number;
}

interface ServicesProps {
  title: string;
  tagline: string;
  description: string;
  services: Service[];
}

export default function Services({ title, tagline, description, services }: ServicesProps) {
  const sortedServices = [...services].sort((a, b) => a.order - b.order);

  return (
    <section className={`${styles.services} services`} id="services">
      <div className="container">
        <div className={`${styles.services__header} services__header`}>
          <h2 className={styles.services__title}>{title}</h2>
          <div className={styles.services__tagline}>
            <span className={styles.gradientText}>{tagline}</span>
          </div>
          <p className={styles.services__description}>{description}</p>
        </div>
        
        <div className={styles.services__grid}>
          {sortedServices.map((service) => (
            <article key={service._id} className={`${styles.serviceCard} service-card`}>
              <div className={styles.serviceCard__stage}>
                <div className={styles.serviceCard__stageIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <span className={styles.serviceCard__stageText}>{service.stage}</span>
              </div>
              <h3 className={styles.serviceCard__title}>{service.title}</h3>
              <ul className={styles.serviceCard__features}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.serviceCard__feature}>
                    <svg className={styles.serviceCard__check} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.serviceCard__btn}>
                <span className={styles.btn__gradientOverlay}></span>
                <span className={styles.serviceCard__btnText}>Show me more</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
