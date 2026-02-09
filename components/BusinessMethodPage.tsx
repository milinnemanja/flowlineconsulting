
import React from 'react';

const BusinessMethodPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="reveal mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 text-xs font-bold mb-6">
          <span>NAŠ PRISTUP</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          Način poslovanja
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Razvijamo prilagođena SaaS rešenja za kompanije koja unapređuju interne procese, omogućavaju potpunu kontrolu nad poslovanjem i obezbeđuju tačnost, efikasnost i dosledno praćenje svih operacija.
        </p>
        <p className="mt-6 text-slate-500 font-medium italic">
          Naš pristup je zasnovan na razumevanju vašeg poslovanja, realnih potreba organizacije i dugoročne održivosti sistema.
        </p>
      </header>

      <section className="space-y-20 mb-24">
        {[
          {
            num: "01",
            title: "Inicijalna konsultacija i analiza poslovanja",
            description: "Saradnja započinje detaljnom konsultacijom sa relevantnim donosiocima odluka. U ovoj fazi prikupljamo ključne informacije:",
            items: [
              "delatnosti i strukturi kompanije",
              "postojećim operativnim procesima",
              "identifikovanim izazovima i neefikasnostima",
              "ciljevima koje kompanija želi da postigne kroz digitalizaciju"
            ],
            footer: "Cilj ove faze je potpuno razumevanje postojećeg stanja i poslovnih prioriteta."
          },
          {
            num: "02",
            title: "Definisanje rešenja i strategije implementacije",
            description: "Na osnovu sprovedene analize definišemo optimalno SaaS rešenje prilagođeno vašoj organizaciji:",
            items: [
              "određujemo obim funkcionalnosti i tehničku arhitekturu sistema",
              "planiramo faze razvoja i implementacije u skladu sa kompleksnošću procesa",
              "fokus na modularnost i skalabilnost"
            ],
            footer: "Rešenja su dizajnirana da budu dugoročno održiva, sa mogućnošću daljeg razvoja u skladu sa rastom kompanije."
          },
          {
            num: "03",
            title: "Integracija sa postojećim načinom rada",
            description: "Prilikom implementacije sistema vodimo računa o kontinuitetu poslovanja, minimizujući prekide:",
            items: [
              "sistem prilagođavamo postojećim radnim tokovima gde god je moguće",
              "uvodimo promene postepeno i kontrolisano",
              "minimizujemo otpor zaposlenih prema novim alatima"
            ],
            footer: "Naš cilj je efikasna digitalizacija bez narušavanja stabilnosti svakodnevnih operacija."
          },
          {
            num: "04",
            title: "Upravljanje promenama i obuka korisnika",
            description: "Kada je neophodno redefinisati procese, osiguravamo da je tim spreman za novi način rada:",
            items: [
              "jasna komunikacija razloga i benefita",
              "dokumentovanje novog načina rada",
              "strukturisan onboarding i obuka (dokumentacija, prezentacije, rad u aplikaciji)"
            ],
            footer: "Na ovaj način osiguravamo visok nivo usvajanja sistema u celoj organizaciji."
          },
          {
            num: "05",
            title: "Dugoročna saradnja, podrška i razvoj",
            description: "Naš odnos sa klijentima je partnerski i dugoročan, prateći evoluciju vašeg biznisa:",
            items: [
              "tehnička podrška i redovno održavanje sistema",
              "unapređenja na osnovu povratnih informacija",
              "kontinuirano savetovanje o optimizaciji procesa"
            ],
            footer: "SaaS rešenja koja razvijamo evoluiraju zajedno sa poslovanjem naših klijenata."
          }
        ].map((step, idx) => (
          <div key={idx} className="reveal flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <span className="text-6xl font-black text-emerald-100 select-none leading-none">{step.num}</span>
            </div>
            <div className="flex-grow pt-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
              <p className="text-slate-600 mb-6 text-lg">{step.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
                <p className="text-emerald-800 text-sm font-medium">{step.footer}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="reveal delay-200 bg-slate-900 rounded-[2rem] p-8 md:p-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
        <h2 className="text-3xl font-bold mb-12 text-center">Zašto naš pristup</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Proces ispred tehnologije", desc: "Fokus na poslovne procese, ne samo na pisanje koda." },
            { title: "Custom rešenja", desc: "Prilagođeni sistemi umesto ograničavajućih generičkih paketa." },
            { title: "Bezbedna tranzicija", desc: "Kontrolisana implementacija bez zastoja u radu." },
            { title: "Stručna podrška", desc: "Struktuirana obuka i detaljna dokumentacija za sve korisnike." },
            { title: "Dugoročno partnerstvo", desc: "Evolucija softvera paralelno sa rastom vašeg biznisa." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="reveal delay-400 mt-20 pt-10 border-t border-slate-100 text-center text-slate-400 text-xs font-mono uppercase tracking-widest leading-relaxed">
        *Standardne B2B prakse u razvoju SaaS sistema, digitalnoj transformaciji i upravljanju poslovnim procesima <br/>
        (SaaS lifecycle management, BPM, enterprise software implementation frameworks).
      </footer>
    </div>
  );
};

export default BusinessMethodPage;
