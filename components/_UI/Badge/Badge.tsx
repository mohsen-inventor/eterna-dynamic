import css from './Badge.module.scss';

interface BadgeProps {
  icon?: React.ReactNode;
  text: string;
  variant?: 'default' | 'purple' | 'gradient';
  className?: string;
}

export default function Badge({ icon, text, variant = 'purple', className = '' }: BadgeProps) {
  return (
    <div className={`${css.badge} ${css[variant]} ${className}`}>
      {icon && <span className={css.badgeIcon}>{icon}</span>}
      <span className={css.badgeText}>{text}</span>
    </div>
  );
}

