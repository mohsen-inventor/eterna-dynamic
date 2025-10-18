import { forwardRef } from 'react';
import css from './Card.module.scss';
import Icon from '../Icon/Icon';

interface CardProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconVariant?: 'positive' | 'negative' | 'neutral';
  text?: string;
  variant?: 'default' | 'minimal' | 'elevated';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, icon, iconVariant = 'neutral', text, variant = 'default', hover = true, className = '', onClick }, ref) => {
    return (
      <div 
        ref={ref}
        className={`${css.card} ${css[variant]} ${hover ? css.hover : ''} ${className}`}
        onClick={onClick}
      >
        {icon && (
          <div className={`${css.cardIcon} ${css[iconVariant]}`}>
            {icon}
          </div>
        )}
        
        {text && <p className={css.cardText}>{text}</p>}
        
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;

// Specialized Card Variants
export const SolutionCard = forwardRef<HTMLDivElement, { text: string; isPositive: boolean }>(
  ({ text, isPositive }, ref) => (
    <Card
      ref={ref}
      icon={<Icon name={isPositive ? 'check' : 'closeCircle'} />}
      iconVariant={isPositive ? 'positive' : 'negative'}
      text={text}
      variant="minimal"
    />
  )
);

SolutionCard.displayName = 'SolutionCard';

