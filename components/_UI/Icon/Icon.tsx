interface IconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

export default function Icon({ name, size = 24, className = '', color = 'currentColor' }: IconProps) {
  const icons: Record<string, JSX.Element> = {
    check: (
      <path 
        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
        stroke={color} 
        strokeWidth="2"
      />
    ),
    close: (
      <path 
        d="M18 6L6 18M6 6l12 12" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    ),
    closeCircle: (
      <path 
        d="M15 9L9 15M9 9L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
        stroke={color} 
        strokeWidth="1.5"
      />
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="8" stroke={color} strokeWidth="2"/>
        <path d="m21 21-4.35-4.35" stroke={color} strokeWidth="2"/>
      </>
    ),
    heart: (
      <path 
        d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" 
        fill={color}
      />
    ),
    plus: (
      <>
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none"/>
        <path d="M12 6v12M6 12h12" stroke={color} strokeWidth="2"/>
      </>
    ),
    circle: (
      <circle cx="12" cy="12" r="3" fill={color}/>
    ),
    logoGradient: (
      <>
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4A70F7', stopOpacity: 1 }} />
            <stop offset="25%" style={{ stopColor: '#8A56F0', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#E050B0', stopOpacity: 1 }} />
            <stop offset="75%" style={{ stopColor: '#F7B04A', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4A70F7', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" stroke="url(#logoGradient)" strokeWidth="2" fill="none"/>
      </>
    ),
  };

  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
    >
      {icons[name] || icons.circle}
    </svg>
  );
}

