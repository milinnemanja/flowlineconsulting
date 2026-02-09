
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '01', value: 40, baseline: 30 },
  { name: '02', value: 35, baseline: 30 },
  { name: '03', value: 65, baseline: 30 },
  { name: '04', value: 45, baseline: 30 },
  { name: '05', value: 90, baseline: 30 },
  { name: '06', value: 70, baseline: 30 },
  { name: '07', value: 100, baseline: 30 },
  { name: '08', value: 85, baseline: 30 },
];

const NeonChart: React.FC = () => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
          <YAxis hide />
          <Tooltip 
            contentStyle={{backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
            itemStyle={{color: '#059669', fontWeight: 'bold'}}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#10b981" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorValue)" 
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 flex items-center justify-center space-x-8 text-xs text-slate-400 uppercase tracking-widest font-semibold">
        <div className="flex items-center">
            <span className="w-3 h-1 bg-emerald-500 mr-2 rounded-full"></span> Skalabilnost
        </div>
        <div className="flex items-center">
            <span className="w-3 h-1 bg-slate-200 mr-2 rounded-full"></span> Tradicionalni model
        </div>
      </div>
    </div>
  );
};

export default NeonChart;
