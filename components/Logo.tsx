
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div 
      className={`${className} font-semibold tracking-tighter select-none`}
      style={{ fontFamily: "'Zalando Sans Expanded', sans-serif" }}
    >
      <span className="text-slate-900">Flowline</span><span className="text-emerald-600">Consulting</span>
    </div>
  );
};

export default Logo;
