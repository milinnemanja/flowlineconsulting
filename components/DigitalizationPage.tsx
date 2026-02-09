
import React from 'react';

const DigitalizationPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="reveal mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 text-xs font-bold mb-6">
          <span>OBJASNJENJE</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
          Digitalizacija radnog toka uz pomoć SaaS sistema
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          U savremenom poslovanju brzina, preglednost i efikasnost odlučuju ko napreduje, a ko stagnira. 
          Digitalizacija radnog toka uz pomoć SaaS (Software as a Service) sistema omogućava kompanijama da 
          povežu ljude, procese i podatke u jedinstven, jasan i lako upravljiv sistem.
        </p>
      </header>

      <div className="reveal delay-100 prose prose-slate max-w-none mb-16">
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Umesto oslanjanja na mejlove, Excel tabele, papire i usmenu komunikaciju, sve informacije i zadaci se nalaze na jednom mestu – dostupni u realnom vremenu, sa bilo koje lokacije.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-emerald-500 pl-4">Šta znači digitalizacija radnog toka?</h2>
        <p className="text-slate-600 mb-4">Digitalizacija radnog toka podrazumeva:</p>
        <ul className="space-y-3 mb-8">
          {[
            "jasno definisane procese i odgovornosti",
            "centralizovano upravljanje zadacima i timovima",
            "automatizaciju rutinskih i ponavljajućih aktivnosti",
            "praćenje učinka, rokova i rezultata u realnom vremenu"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-slate-600 font-medium italic">
          SaaS sistemi omogućavaju da se sve ovo koristi bez komplikovane instalacije, skupih servera ili dugotrajne implementacije.
        </p>
      </div>

      <section className="reveal delay-200 mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Zašto je digitalizacija dobra za firmu?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              num: "1",
              title: "Veća efikasnost i manje grešaka",
              text: "Automatizovani tokovi rada smanjuju ljudske greške, dupliranje posla i izgubljene informacije. Zaposleni tačno znaju šta rade, kada rade i kome odgovaraju."
            },
            {
              num: "2",
              title: "Potpuna preglednost poslovanja",
              text: "Menadžment u svakom trenutku vidi status zadataka, opterećenost timova, probleme u procesu i realne rokove. Odluke se donose na osnovu podataka."
            },
            {
              num: "3",
              title: "Bolja organizacija ljudi i timova",
              text: "SaaS sistemi jasno povezuju zadatke sa ljudima. Nema nejasnih odgovornosti, prebacivanja krivice ili izgubljenih zahteva."
            },
            {
              num: "4",
              title: "Skalabilnost bez haosa",
              text: "Digitalizovan radni tok omogućava lako proširenje poslovanja bez gubitka kontrole, čak i kada se broj zaposlenih višestruko poveća."
            },
            {
              num: "5",
              title: "Ušteda vremena i novca",
              text: "Manje administracije i manje sastanaka znači niže operativne troškove, brže izvršenje zadataka i fokus na razvoj."
            }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-lg transition-all">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg font-bold text-sm mb-4">{benefit.num}</span>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal delay-300 bg-slate-900 text-white p-8 md:p-12 rounded-3xl mb-16 shadow-xl shadow-emerald-900/10">
        <h2 className="text-2xl font-bold mb-8">Zašto danas skoro svi koriste SaaS sisteme?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Brza implementacija – spreman za rad odmah",
            "Fleksibilnost – pristup sa bilo kog uređaja",
            "Niski početni troškovi – bez IT ulaganja",
            "Stalna ažuriranja i sigurnost",
            "Rad na daljinu i hibridni modeli"
          ].map((point, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-300 font-medium">{point}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="reveal delay-400 border-t border-slate-100 pt-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Digitalizacija nije trošak – to je investicija</h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Digitalizacija radnog toka ne menja samo alat koji koristite, već način na koji firma funkcioniše. 
          Donosi red tamo gde vlada haos, jasnoću tamo gde postoji konfuzija i kontrolu tamo gde su procesi nekada zavisili od pojedinaca.
        </p>
        <p className="text-xl font-bold text-emerald-600 italic">
          Ako želite firmu koja je organizovana, skalabilna i spremna za rast – digitalizacija radnog toka je neophodan korak.
        </p>
      </footer>
    </div>
  );
};

export default DigitalizationPage;
