import css from './Process.module.scss';

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
    <section className="process" id="process">
      <div className="container">
        <div className="process__header">
          <div className="process__badge">
            <svg className="process__badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>{badgeText}</span>
          </div>
          <h2 className="process__title">{title}</h2>
          <div className="process__tagline">
            <span className="gradient-text">{tagline}</span>
          </div>
          <p className="process__description">{description}</p>
        </div>
        
        <div className="process__content-wrapper">
          <div className="process__functions">
            {functions.map((func, idx) => (
              <div key={idx} className="process__function">
                <div className="process__function-header">
                  <div className="process__function-circle"></div>
                  <span className="process__function-title">{func.name}</span>
                </div>
                <div className="process__function-content">
                  <div className="process__function-line"></div>
                  <ul className="process__function-items">
                    {func.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="process__function-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Wavy Gradient Graphic */}
          <div className="process__wave">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/wave-v.avif" />
              <img src="/images/wave-h.png" alt="Decorative wave graphic" className="process__wave-image" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
