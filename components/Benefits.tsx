
import React from 'react';

interface BenefitsProps {
  onWhySaasClick?: () => void;
}

const benefits = [
  { title: "Jasna hijerarhija", desc: "Definišite uloge i odgovornosti svakog člana tima i sektora." },
  { title: "Vizuelni radni tok", desc: "Pratite kretanje svakog projekta kroz faze u realnom vremenu." },
  { title: "Bez gubljenja informacija", desc: "Centralizovana komunikacija eliminiše potrebu za beskonačnim mejlovima." },
  { title: "Merenje performansi", desc: "Dobijte precizne podatke o efikasnosti svakog sektora." },
  { title: "Laka koordinacija", desc: "Sinhronizujte rad više timova na različitim lokacijama istovremeno." }
];

const Benefits: React.FC<BenefitsProps> = ({ onWhySaasClick }) => {
  return (
    <section id="zasto-saas" className="py-24 relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
        {/* Left column - Heading & Description */}
        <div className="w-full md:w-1/3 md:sticky md:top-32 reveal mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">Efikasna Organizacija</h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-6">
            SaaS rešenja nisu samo softver u oblaku — to je centar vašeg organizacionog procesa koja omogućava sektorima da dišu istim ritmom. 
          </p>
          <p className="text-slate-400 mb-8">
            Kada svaki tim zna svoj sledeći korak, efikasnost raste, a operativni troškovi drastično padaju.
          </p>
          {onWhySaasClick && (
            <button 
              onClick={onWhySaasClick}
              className="text-emerald-600 font-bold flex items-center space-x-2 hover:text-emerald-700 transition-colors group"
            >
              <span>Saznaj više zašto SaaS</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          )}
        </div>
        
        {/* Right column - Cards Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className={`reveal gradient-border p-8 group delay-${(i + 1) * 100} border border-slate-50 bg-white`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
          <div className="reveal delay-500 p-8 border border-dashed border-slate-200 rounded-xl flex items-center justify-center text-center bg-slate-50/50">
            <p className="text-slate-400 italic text-sm">
              Sistemi dizajnirani da transformišu način na koji vaš tim sarađuje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
