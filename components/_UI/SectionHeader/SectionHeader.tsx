import { forwardRef } from 'react';
import css from './SectionHeader.module.scss';
import Badge from '../Badge/Badge';

interface SectionHeaderProps {
  badge?: {
    icon?: React.ReactNode;
    text: string;
    variant?: 'default' | 'purple' | 'gradient';
  };
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  maxWidth?: number;
  className?: string;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ badge, title, subtitle, description, align = 'center', maxWidth = 800, className = '' }, ref) => {
    return (
      <div 
        ref={ref}
        className={`${css.sectionHeader} ${css[align]} ${className}`}
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {badge && (
          <Badge 
            icon={badge.icon} 
            text={badge.text} 
            variant={badge.variant}
          />
        )}
        
        <h2 className={css.title}>{title}</h2>
        
        {subtitle && (
          <div className={css.subtitle}>
            <span className="gradient-text">{subtitle}</span>
          </div>
        )}
        
        {description && (
          <p className={css.description}>{description}</p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;

