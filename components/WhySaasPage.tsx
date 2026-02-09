
import React from 'react';

const WhySaasPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="reveal mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 text-xs font-bold mb-6">
          <span>KLJUČ POSLOVANJA</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          Zašto je SaaS sistem ključan za savremeno poslovanje
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
          Digitalizacija radnog prostora više nije prednost – ona je uslov za stabilno, skalabilno i konkurentno poslovanje. 
          SaaS sistemi omogućavaju kompanijama da organizuju procese, podatke i ljude unutar jednog centralizovanog sistema.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="reveal flex flex-col space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Centralizacija podataka i procesa</h2>
          <p className="text-slate-600 leading-relaxed">
            Jedan od najvećih problema u klasičnom poslovanju je rascepkanost informacija u Excel fajlovima, mejlovima i ručnim zapisima. 
            SaaS sistem objedinuje klijente, projekte, zadatke i dokumentaciju na jednom mestu, eliminišući greške i gubitak podataka.
          </p>
        </div>

        <div className="reveal delay-100 flex flex-col space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Povećana efikasnost i ušteda vremena</h2>
          <p className="text-slate-600 leading-relaxed">
            Automatizacijom svakodnevnih operacija ručni unos se svodi na minimum. Procesi postaju jasni i ponovljivi, 
            što omogućava zaposlenima da se fokusiraju na stvaran rad umesto na administraciju, rezultirajući većom produktivnošću.
          </p>
        </div>

        <div className="reveal delay-200 flex flex-col space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-200">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v1a2 2 0 11-4 0v-1a1 1 0 00-1-1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Prilagodljivost različitim branšama</h2>
          <p className="text-slate-600 leading-relaxed">
            Bilo da se radi o proizvodnji, uslugama, logistici ili IT sektoru, SaaS platforma se prilagođava realnim poslovnim procesima kompanije. 
            Nije „jedno rešenje za sve“, već fleksibilan sistem koji prati vaše specifične potrebe.
          </p>
        </div>

        <div className="reveal delay-300 flex flex-col space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-200">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Lakša kontrola i transparentnost</h2>
          <p className="text-slate-600 leading-relaxed">
            Menadžment dobija jasan uvid u stanje projekata, opterećenost tima i rokove. Odluke se donose na osnovu stvarnih podataka, 
            što povećava odgovornost i drastično smanjuje unutrašnje nesporazume u organizaciji.
          </p>
        </div>
      </section>

      <div className="reveal delay-400 bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-16 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-3">
            <span className="text-emerald-500">✔</span>
            <span>Sigurnost i pouzdanost</span>
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Korišćenje enkripcije, redovnih backup-a i kontrole pristupa osigurava da su podaci bezbedniji nego na lokalnim računarima.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-3">
            <span className="text-emerald-500">✔</span>
            <span>Skalabilnost</span>
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Sistem raste paralelno sa vašom firmom. Dodavanje korisnika i funkcija ne zahteva skupe migracije ili promenu softvera.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-3">
            <span className="text-emerald-500">✔</span>
            <span>Rad na daljinu</span>
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Pristup sa bilo kog mesta i uređaja omogućava timovima da ostanu povezani i efikasni, bilo da su u kancelariji ili na terenu.
          </p>
        </div>
      </div>

      <footer className="reveal delay-500 text-center max-w-3xl mx-auto border-t border-slate-100 pt-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Zaključak</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          SaaS sistem nije samo softver – on je alat za promenu načina razmišljanja i rada. On uvodi red, jasnoću i kontrolu, smanjuje operativne rizike i omogućava vam da se fokusirate na rast.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {["Veća efikasnost", "Niži troškovi", "Bolja organizacija", "Stabilnost"].map((val, i) => (
             <div key={i} className="bg-emerald-50 text-emerald-700 py-3 rounded-xl font-bold text-sm shadow-sm">
               {val}
             </div>
           ))}
        </div>
      </footer>
    </div>
  );
};

export default WhySaasPage;
