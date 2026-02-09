
import React from 'react';

interface SystemSelectionProps {
  onReadMoreClick?: () => void;
}

const selectionCriteria = [
  {
    title: "Definišite svoje potrebe",
    desc: "Jasno identifikujte konkretne zahteve i ciljeve koje vaša organizacija želi da postigne.",
    icon: "🎯"
  },
  {
    title: "Procena provajdera",
    desc: "Uporedite različite SaaS provajdere na osnovu ponude, pouzdanosti i bezbednosti.",
    icon: "🔍"
  },
  {
    title: "Procena integracije",
    desc: "Razmotrite koliko se SaaS aplikacija dobro integriše sa vašim postojećim sistemima.",
    icon: "🔌"
  },
  {
    title: "Pregled troškova",
    desc: "Analizirajte cene pretplate i uverite se da su u skladu sa vašim budžetom.",
    icon: "💰"
  }
];

const SystemSelection: React.FC<SystemSelectionProps> = ({ onReadMoreClick }) => {
  return (
    <section id="izbor-sistema" className="py-24 border-t border-slate-100">
      <div className="text-center mb-20 reveal">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Izbor sistema</h2>
        <p className="max-w-3xl mx-auto text-slate-500 text-lg">
          Izbor pravog SaaS rešenja podrazumeva nekoliko ključnih razmatranja kako bi se osigurala maksimalna vrednost za vaše poslovanje.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {selectionCriteria.map((item, i) => (
          <div key={i} className={`reveal delay-${(i % 2) * 100} bg-white border border-slate-100 rounded-3xl p-8 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group relative overflow-hidden`}>
            <div className="flex items-start space-x-6">
              <div className="text-4xl p-4 bg-emerald-50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 reveal delay-400 p-8 bg-slate-900 rounded-[2rem] text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl"></div>
        <p className="text-xl font-medium mb-6 relative z-10">Pravilan izbor sistema je prvi korak ka uspešnoj digitalnoj transformaciji.</p>
        <button 
          onClick={onReadMoreClick}
          className="relative z-10 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-bold transition-all transform hover:scale-105"
        >
          Pročitajte ceo vodič
        </button>
      </div>
    </section>
  );
};

export default SystemSelection;
