import css from './Solutions.module.scss';

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
    <section className="solutions" id="solutions">
      <div className="container">
        <div className="solutions__header">
          <div className="solutions__badge">
            <svg className="solutions__badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor"/>
            </svg>
            <span>{badgeText}</span>
          </div>
          <h2 className="solutions__title">{title}</h2>
          <div className="solutions__subtitle">
            <span className="gradient-text">{subtitle}</span>
          </div>
        </div>
        
        <div className="solutions__content">
          {/* Problems Column */}
          <div className="solutions__column solutions__problems">
            {problems.map((problem, idx) => (
              <div key={idx} className="solutions__card">
                <div className="solutions__card-icon solutions__card-icon--negative">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 9L9 15M9 9L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <p className="solutions__card-text">{problem}</p>
              </div>
            ))}
          </div>

          {/* Cosmos Animation Column */}
          <div className="solutions__center">
            <div className="solutions__cosmos">
              <video className="solutions__cosmos-video" autoPlay muted loop playsInline>
                <source src={cosmosVideoUrl} type="video/webm" />
              </video>
            </div>
          </div>
          
          {/* Solutions Column */}
          <div className="solutions__column solutions__solutions">
            {solutions.map((solution, idx) => (
              <div key={idx} className="solutions__card">
                <div className="solutions__card-icon solutions__card-icon--positive">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <p className="solutions__card-text">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
