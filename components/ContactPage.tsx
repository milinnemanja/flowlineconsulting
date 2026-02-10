
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="reveal mb-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 text-xs font-bold mb-6">
          <span>STUPIMO U KONTAKT</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          Kontaktirajte kada vi budete spremni na to
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Popunite formu ispod i javiću vam se u najkraćem roku kako bismo razgovarali o vašim poslovnim potrebama.
        </p>
      </header>

      <div className="reveal delay-100 bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-emerald-900/5 relative overflow-hidden max-w-4xl mx-auto">
        {/* Dekorativni element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl -z-10 rounded-full"></div>
        
        <form 
          action="https://formspree.io/f/xnqyjwgo" 
          method="POST"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ime */}
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-bold text-slate-700">Ime</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                required 
                placeholder="Vaše ime"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
              />
            </div>
            
            {/* Prezime */}
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-bold text-slate-700">Prezime</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                required 
                placeholder="Vaše prezime"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Naziv firme (opciono) */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-bold text-slate-700">Naziv firme <span className="text-slate-400 font-normal">(opciono)</span></label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                placeholder="Naziv vašeg biznisa"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
              />
            </div>

            {/* Koliko dugo posluje firma */}
            <div className="space-y-2">
              <label htmlFor="yearsInBusiness" className="block text-sm font-bold text-slate-700">Koliko dugo posluje firma?</label>
              <input 
                type="text" 
                id="yearsInBusiness" 
                name="yearsInBusiness" 
                required 
                placeholder="npr. 5 godina"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Grad */}
            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-bold text-slate-700">Grad</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                required 
                placeholder="Mesto sedišta firme"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
              />
            </div>

            {/* Čime se bavi firma */}
            <div className="space-y-2">
              <label htmlFor="businessType" className="block text-sm font-bold text-slate-700">Čime se bavi firma?</label>
              <input 
                type="text" 
                id="businessType" 
                name="businessType" 
                required 
                placeholder="Delatnost kompanije"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
              />
            </div>
          </div>

          {/* Poruka */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-bold text-slate-700">Vaša poruka</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows={5}
              placeholder="Opišite vaše potrebe ili postavite pitanje..."
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit dugme */}
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center space-x-3 group"
            >
              <span>Pošalji poruku</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="reveal delay-200 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="font-bold text-slate-900 mb-1">Email</h4>
          <p className="text-slate-500 text-sm">nemanjamilin.contact@gmail.com</p>
        </div>
        <div className="p-6">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
             <a href="https://www.linkedin.com/in/nemanja-milin/" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <h4 className="font-bold text-slate-900 mb-1">LinkedIn</h4>
          <p className="text-slate-500 text-sm">Povežimo se profesionalno</p>
        </div>
        <div className="p-6">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h4 className="font-bold text-slate-900 mb-1">Telefon</h4>
          <p className="text-slate-500 text-sm">+381 63 84 70 818</p>
        </div>
        <div className="p-6">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="font-bold text-slate-900 mb-1">Radno vreme</h4>
          <p className="text-slate-500 text-sm">Pon - Pet, 09:00 - 17:00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
