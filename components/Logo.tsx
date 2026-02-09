
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <div className={`${className} relative group flex items-center justify-center`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-all duration-500 group-hover:rotate-3 group-hover:scale-110"
      >
        {/* Dynamic Background Glow */}
        <circle cx="50" cy="50" r="40" fill="currentColor" className="text-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Modern Flowline Checkmark */}
        <path 
          d="M25 52L42 69L75 32" 
          stroke="currentColor" 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-emerald-600 drop-shadow-sm"
          style={{
            strokeDasharray: 100,
            strokeDashoffset: 0,
          }}
        />
        
        {/* Accent flow line that doubles as a shadow/depth element */}
        <path 
          d="M32 52L42 62L68 32" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-emerald-400/60"
        />

        {/* Connectivity Nodes - Pulse effect on the "Complete" point */}
        <circle cx="75" cy="32" r="6" fill="#059669" className="animate-pulse" />
        <circle cx="25" cy="52" r="4" fill="#34d399" />
        
        {/* Tiny decorative trail node */}
        <circle cx="42" cy="69" r="3" fill="#10b981" />
      </svg>
    </div>
  );
};

export default Logo;
