
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* O Kompaniji Section */}
      <section className="reveal mb-24">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 text-xs font-bold mb-6">
          <span>MISIJA I CILJ</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          O kompaniji
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-xl text-slate-600 leading-relaxed">
              Pomažem kompanijama da povežu razdvojene sektore, eliminišu neefikasnosti i automatizuju ključne procese kroz prilagođena SaaS rešenja. Fokusiran sam na razumevanje stvarnih poslovnih problema i njihovo pretvaranje u jasne, funkcionalne i merljive sisteme.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Cilj je da transformišem operativni haos u strukturisan, predvidiv i skalabilan način rada. Kroz pametnu automatizaciju, integraciju postojećih alata i razvoj jedinstvenog softvera, omogućim kompanijama da rade brže, preciznije i sa potpunom kontrolom nad podacima i procesima.
            </p>
            <div className="p-6 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/20 blur-2xl"></div>
                <p className="text-xl font-bold italic relative z-10">
                    "Pronalazim rešenja koja se prilagođavaju poslovanju, a ne obrnuto."
                </p>
            </div>
          </div>
          <div className="bg-emerald-50 rounded-[3rem] p-12 relative overflow-hidden flex flex-col justify-center items-center text-center border border-emerald-100">
             <div className="w-24 h-24 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-4xl mb-8 shadow-xl shadow-emerald-200">
                🚀
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-4">Skalabilnost po dizajnu</h3>
             <p className="text-slate-600">
                Svaki sistem koji gradimo projektovan je tako da može da raste bez potrebe za kompletnom rekonstrukcijom arhitekture.
             </p>
          </div>
        </div>
      </section>

      {/* O Meni Section */}
      <section className="reveal delay-200 bg-slate-50 border border-slate-100 rounded-[3rem] p-8 md:p-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 shrink-0">
                <div className="relative">
                    <div className="absolute -inset-4 bg-emerald-500/10 blur-xl rounded-full"></div>
                    <img 
                        src="https://picsum.photos/400/500?grayscale" 
                        alt="Nemanja Milin" 
                        className="w-full aspect-[4/5] object-cover rounded-[2rem] border-4 border-white shadow-2xl relative z-10" 
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100">
                        <p className="text-emerald-600 font-black text-3xl">7+</p>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Godina iskustva</p>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-2/3">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-2">O meni</h2>
                    <p className="text-emerald-600 font-bold text-xl">Nemanja Milin</p>
                    <p className="text-slate-400 font-medium">Web Developer & System Administrator</p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                        Tokom sedam godina rada sa kompanijama u različitim industrijama, radio sam u dinamičnim i često neuređenim poslovnim okruženjima gde su brza reakcija i konkretna rešenja bili ključni. Upravo takav rad mi je dao jasnu sliku kako sistemi treba da funkcionišu u praksi, a ne samo u teoriji.
                    </p>
                    <p>
                        Kroz svakodnevno rešavanje tehničkih i organizacionih problema, razvio sam sposobnost da brzo identifikujem problem, povežem tehnologiju sa realnim poslovnim potrebama i izgradim stabilna, dugoročna rešenja.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {[
                            "Razvoj web aplikacija",
                            "Automatizacija procesa",
                            "Sistemska administracija",
                            "Optimizacija radnih tokova"
                        ].map((skill, i) => (
                            <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                <span className="font-bold text-sm text-slate-700">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200">
                    <p className="text-xl font-bold text-slate-900 italic">
                        "Moj pristup je jednostavan: razumeti problem do kraja i napraviti sistem koji ga trajno rešava."
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
