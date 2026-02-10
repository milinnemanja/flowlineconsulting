
import React from 'react';

interface SystemSelectionPageProps {
  onConsultationClick?: () => void;
}

const SystemSelectionPage: React.FC<SystemSelectionPageProps> = ({ onConsultationClick }) => {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="reveal mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 text-xs font-bold mb-6">
          <span>STRATEŠKA PROCENA</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          Izbor pravog SaaS rešenja
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
          Pravilan izbor softvera ne zavisi samo od tehničkih specifikacija, već od usklađenosti sa vašim poslovnim modelom i dugoročnim ciljevima.
        </p>
      </header>

      <section className="space-y-12">
        <div className="reveal flex flex-col md:flex-row gap-8 bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-3xl shrink-0">🎯</div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Definišite svoje potrebe</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Jasno identifikujte konkretne zahteve i ciljeve koje vaša organizacija želi da postigne korišćenjem SaaS aplikacije. 
              To uključuje razumevanje potrebnih funkcija, mogućnosti i zahteva u pogledu performansi. 
              Bez precizno definisanih potreba, lako je investirati u sistem koji je ili previše složen ili neadekvatan.
            </p>
          </div>
        </div>

        <div className="reveal delay-100 flex flex-col md:flex-row gap-8 bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl shrink-0">🔍</div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Procena provajdera</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Istražite i uporedite različite SaaS provajdere na osnovu njihove ponude, pouzdanosti, korisničke podrške i bezbednosnih praksi. 
              Stabilnost provajdera je ključna, jer vaš biznis postaje zavisan od njihove infrastrukture. Proverite sertifikate, reference i brzinu odgovora podrške.
            </p>
          </div>
        </div>

        <div className="reveal delay-200 flex flex-col md:flex-row gap-8 bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl shrink-0">🔌</div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Procena integracije</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Razmotrite koliko se SaaS aplikacija dobro integriše sa vašim postojećim sistemima i radnim procesima. 
              Potražite rešenja koja nude API-je ili mogućnosti integracije sa alatima koje već koristite (ERP, CRM, email servisi). 
              Sistem koji ne komunicira sa ostatkom firme stvara nove "informacione silose".
            </p>
          </div>
        </div>

        <div className="reveal delay-300 flex flex-col md:flex-row gap-8 bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl shrink-0">💰</div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Pregled troškova</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Analizirajte cene pretplate, uključujući eventualne dodatne troškove za napredne funkcije ili korišćenje iznad osnovnog paketa. 
              Uverite se da je cena u skladu sa vašim budžetom i očekivanim obimom korišćenja. 
              Vodite računa o skrivenim troškovima obuke, implementacije i eventualnog raskida ugovora.
            </p>
          </div>
        </div>
      </section>

      <div className="reveal delay-400 mt-20 bg-slate-900 rounded-[3rem] p-12 text-center text-white">
        <h3 className="text-2xl font-bold mb-6">Trebate pomoć pri izboru?</h3>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Ako ne znate da li je ovo za vas mogu vam sprovesti detaljnu analizu vaših procesa i preporučiti rešenje koje će najbolje podržati vaš rast.
        </p>
        <button 
          onClick={onConsultationClick}
          className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-2xl font-bold text-lg transition-all"
        >
          Zakažite besplatne konsultacije
        </button>
      </div>
    </div>
  );
};

export default SystemSelectionPage;
