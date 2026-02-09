
import React from 'react';

const Philosophy: React.FC = () => {
  const values = [
    { label: "Dugoročna rešenja", val: "a ne jednokratni projekti" },
    { label: "Automatizacija procesa", val: "koja štedi vreme i novac" },
    { label: "Čista arhitektura", val: "koja omogućava lako proširenje" },
    { label: "Realne poslovne potrebe", val: "a ne generički šabloni" }
  ];

  return (
    <section id="nacin-poslovanja" className="py-24 border-t border-slate-100">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 reveal">
          <div className="p-1 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500">
            <div className="bg-white rounded-[14px] p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Način poslovanja i <br/> razvoj SaaS rešenja</h2>
              <div className="space-y-8">
                {values.map((v, i) => (
                  <div key={i} className={`reveal delay-${(i + 1) * 100} flex items-start space-x-4`}>
                    <div className="mt-1 w-5 h-5 rounded-full border-2 border-emerald-500 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 leading-tight">{v.label}</h4>
                      <p className="text-slate-500">{v.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 reveal delay-200">
          <p className="text-3xl md:text-4xl font-light italic leading-relaxed text-slate-700 mb-8">
            "Cilj mi je da softver ne bude trošak, već alat koji <span className="text-emerald-600 font-bold">aktivno doprinosi poslovnom uspehu</span>."
          </p>
          <div className="flex items-center space-x-4">
            <img src="https://picsum.photos/100/100?grayscale" alt="Avatar" className="w-16 h-16 rounded-full border-2 border-emerald-500 shadow-md" />
            <div>
              <p className="font-bold text-slate-900 text-lg">Nemanja Milin</p>
              <p className="text-slate-400 font-medium">Web Developer & System Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
