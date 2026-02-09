
import React from 'react';

const WorkflowVisual: React.FC = () => {
  const sectors = [
    { name: 'Marketing', status: ' Završeno', color: 'bg-blue-500' },
    { name: 'Dizajn', status: 'U radu', color: 'bg-amber-500' },
    { name: 'Razvoj', status: 'Čeka red', color: 'bg-emerald-500' },
    { name: 'QA', status: 'Čeka red', color: 'bg-slate-300' },
  ];

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {sectors.map((sector, i) => (
          <div key={i} className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-left relative overflow-hidden group">
            <div className={`absolute top-0 left-0 h-1 w-full ${sector.color} opacity-20 group-hover:opacity-100 transition-opacity`}></div>
            <div className="flex justify-between items-center mb-3">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sector.name}</span>
               <div className={`w-2 h-2 rounded-full ${sector.color} animate-pulse`}></div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-slate-200 rounded-full w-3/4"></div>
              <div className="h-2 bg-slate-100 rounded-full w-1/2"></div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between">
               <span className="text-[10px] font-semibold text-slate-500">{sector.status}</span>
               <div className="flex -space-x-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-slate-300"></div>
                  <div className="w-5 h-5 rounded-full border border-white bg-slate-400"></div>
               </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Visual Arrows for flow - Simple decorative elements */}
      <div className="hidden md:flex justify-around items-center mt-6 px-10">
        <svg className="w-8 h-8 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        <svg className="w-8 h-8 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        <svg className="w-8 h-8 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
};

export default WorkflowVisual;
