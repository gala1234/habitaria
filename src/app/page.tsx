"use client";
import React, { useState } from 'react';
import { ArrowRight, Box, Instagram, Linkedin, Mail, Globe, ShoppingBag, Maximize, Ruler } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';

interface ModelData {
    name: string;
    tagline: string;
    desc: string;
    specs: string[];
    price: string;
    area: string;
    dims: string;
    image: string;
}

const HabitariaLanding: React.FC = () => {
  const { t, language } = useApp();
  const [selectedModel, setSelectedModel] = useState('medium');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const modelsData: { [key: string]: ModelData } = {
    small: { name: t('models.small.name'), tagline: t('models.small.tagline'), desc: t('models.small.desc'), specs: t('models.small.specs'), price: "24.900€", area: "15 m²", dims: "2.5m x 6m", image: "https://images.unsplash.com/photo-1521783593447-5702b9bc7252?q=80&w=1200&auto=format&fit=crop" },
    medium: { name: t('models.medium.name'), tagline: t('models.medium.tagline'), desc: t('models.medium.desc'), specs: t('models.medium.specs'), price: "42.500€", area: "31.2 m²", dims: "5.2m x 6m", image: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=1200&auto=format&fit=crop" },
    large: { name: t('models.large.name'), tagline: t('models.large.tagline'), desc: t('models.large.desc'), specs: t('models.large.specs'), price: "58.900€", area: "47.4 m²", dims: "7.9m x 6m", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop" }
  };

  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen pt-40 md:pt-60 pb-20 flex items-center justify-center overflow-hidden">
        {/* Luces de fondo (Blur) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"></div>
        
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000&auto=format&fit=crop" 
            alt="Arquitectura" 
            className="w-full h-full object-cover opacity-20 dark:grayscale dark:opacity-40"
          /> 
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#050505] dark:via-transparent dark:to-[#050505] opacity-60 dark:opacity-100"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pb-12">
          <p className="text-orange-500 dark:text-orange-400 font-bold tracking-[0.3em] uppercase mb-6 drop-shadow-sm">
            {t('hero.pre')}
          </p>
          <h1 className="text-gray-900 dark:text-white text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-lg">
            {t('hero.title1')} <span className="text-gradient">{t('hero.title2')}</span>.<br />
            {t('hero.title3')} <span className="text-gray-400 dark:text-neutral-400">{t('hero.title4')}</span>.
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-neutral-300 font-medium text-lg md:text-xl mb-12 leading-relaxed">
            {t('hero.desc')}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button onClick={() => scrollToSection('modelos')} className="btn-primary">
              {t('hero.cta1')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('filosofía')}
              className="px-8 py-4 border border-gray-900 dark:border-white/30 backdrop-blur-sm text-gray-900 dark:text-white font-bold uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-white/10 transition-all shadow-lg rounded-sm"
            >
              {t('hero.cta2')}
            </button>
          </div>
        </div>

         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 dark:text-neutral-500">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
        </div>
      </header>

      {/* --- SECTION: MODULAR COLLECTION --- */}
      <section id="modelos" className="py-24 bg-gray-50 dark:bg-[#080808] relative transition-colors duration-500 scroll-mt-20">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                      <div className="flex items-center gap-3 mb-2">
                           <Box className="text-orange-500" />
                           <p className="text-purple-600 dark:text-purple-500 font-bold uppercase tracking-widest">{t('modular.newCol')}</p>
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black uppercase text-gray-900 dark:text-white leading-none">
                          Habitaria <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">{t('modular.title')}</span>
                      </h2>
                      <p className="mt-4 text-gray-600 dark:text-neutral-400 max-w-lg">
                          {t('modular.subtitle')}
                      </p>
                  </div>
                  
                  <div className="flex bg-white dark:bg-[#151515] p-1 rounded-full border border-gray-200 dark:border-white/10 overflow-x-auto shadow-sm">
                      {['small', 'medium', 'large'].map((model) => (
                          <button
                              key={model}
                              onClick={() => setSelectedModel(model)}
                              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all whitespace-nowrap ${
                                  selectedModel === model 
                                  ? 'bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg' 
                                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                              }`}
                          >
                              {model === 'small' ? 'Model S' : model === 'medium' ? 'Model M' : 'Model L'}
                          </button>
                      ))}
                  </div>
              </div>

              <div className="bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/5 grid lg:grid-cols-2 transition-colors">
                  <div className="relative h-[400px] lg:h-auto overflow-hidden group bg-gray-200 dark:bg-[#111]">
                      <img src={modelsData[selectedModel].image} alt={modelsData[selectedModel].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider">
                          {t('modular.delivery')}
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-black/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                          <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">{t('modular.finish')}</p>
                          <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#E3DAC9] border-2 border-white shadow-sm" />
                              <span className="font-semibold text-gray-900 dark:text-white text-sm">{t('modular.finishName')}</span>
                          </div>
                          <p className="text-[10px] mt-1 text-gray-400 italic">{t('modular.finishNote')}</p>
                      </div>
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-2"><span className="text-orange-500 font-bold uppercase tracking-widest text-xs">{modelsData[selectedModel].tagline}</span></div>
                      <div className="flex flex-wrap justify-between items-start mb-6 gap-4 border-b border-gray-100 dark:border-white/10 pb-6">
                          <div>
                              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{modelsData[selectedModel].name}</h3>
                              <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 font-mono text-sm">
                                  <span className="flex items-center gap-1"><Maximize size={14}/> {modelsData[selectedModel].area}</span>
                                  <span className="flex items-center gap-1"><Ruler size={14}/> {modelsData[selectedModel].dims}</span>
                              </div>
                          </div>
                          <div className="text-right">
                              <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">{t('modular.basePrice')}</p>
                              <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{modelsData[selectedModel].price}</p>
                          </div>
                      </div>

                      <p className="text-gray-600 dark:text-neutral-400 leading-relaxed mb-8 text-lg">{modelsData[selectedModel].desc}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                          {modelsData[selectedModel].specs.map((spec: string, idx: number) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#111] rounded-lg border border-gray-100 dark:border-white/5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{spec}</span>
                              </div>
                          ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                          <button className="flex-1 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-bold uppercase tracking-wider hover:bg-orange-600 dark:hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5">
                              <ShoppingBag size={18} /> {t('modular.btnBuy')}
                          </button>
                          <button className="flex-1 px-8 py-4 border-2 border-gray-200 dark:border-white/20 text-gray-900 dark:text-white rounded-xl font-bold uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-white/5 transition-all flex items-center justify-center">
                              {t('modular.btnInfo')}
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- PHILOSOPHY --- */}
      <section id="filosofía" className="py-24 bg-white dark:bg-[#050505] relative transition-colors">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-full h-full border-2 border-orange-500/20 rounded-2xl" />
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop" alt="Interior" className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <Box className="text-orange-500" size={32} />
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-gray-900 dark:text-white">El Isotipo</h2>
              </div>
              <h3 className="text-xl text-gray-600 dark:text-neutral-400 mb-8 font-light">Estabilidad, Estructura y Dimensión Espacial.</h3>
              <p className="text-gray-600 dark:text-neutral-500 leading-relaxed mb-6">El logotipo de Habitaria se basa en la figura del cubo isométrico, evocando la esencia misma de la arquitectura moderna.</p>
              <div className="grid grid-cols-2 gap-8 mt-12 border-t border-gray-200 dark:border-white/10 pt-8 text-gray-900 dark:text-white font-bold">
                  <div><h4 className="text-4xl">15+</h4><p className="text-xs text-orange-600 uppercase tracking-widest mt-1">Años</p></div>
                  <div><h4 className="text-4xl">80+</h4><p className="text-xs text-purple-600 uppercase tracking-widest mt-1">Hitos</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer id="contacto" className="pt-24 bg-gray-100 dark:bg-[#020202] border-t border-gray-200 dark:border-white/10 transition-colors">
        <div className="container mx-auto px-6 mb-20 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold uppercase mb-8 text-gray-900 dark:text-white">
                {t('footer.talk')}<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">{t('footer.future')}</span>
              </h2>
              <p className="text-gray-600 dark:text-neutral-400 text-lg max-w-md mb-12">{t('footer.desc')}</p>
              <a href="mailto:contacto@habitaria.com" className="flex items-center gap-4 text-xl hover:text-orange-500 transition-colors text-gray-900 dark:text-white"><Mail /> contacto@habitaria.com</a>
            </div>
            <form className="bg-white dark:bg-[#0a0a0a] p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-white/5 shadow-xl">
              <div className="space-y-6">
                <div><label className="block text-sm uppercase text-gray-500 dark:text-neutral-500 mb-2">{t('footer.form.name')}</label>
                <input type="text" className="w-full bg-gray-50 dark:bg-[#151515] border border-gray-200 dark:border-white/10 p-4 rounded-lg text-gray-900 dark:text-white focus:border-orange-500 outline-none transition-colors" /></div>
                <div><label className="block text-sm uppercase text-gray-500 dark:text-neutral-500 mb-2">{t('footer.form.interest')}</label>
                <select className="w-full bg-gray-50 dark:bg-[#151515] border border-gray-200 dark:border-white/10 p-4 rounded-lg text-gray-900 dark:text-white focus:border-orange-500 outline-none transition-colors"><option>S</option><option>M</option><option>L</option></select></div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold uppercase tracking-wider py-5 rounded-lg shadow-lg hover:translate-x-1 transition-all">{t('footer.form.btn')}</button>
              </div>
            </form>
        </div>

        <div className="bg-gray-200 dark:bg-[#080808] pt-16 pb-8 transition-colors">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-300 dark:border-white/10 pb-16">
              <div><h4 className="font-bold text-gray-900 dark:text-white uppercase mb-6">{t('footer.cols.brand')}</h4><div className="flex gap-4"><Instagram className="text-gray-600 hover:text-orange-500 cursor-pointer" /><Linkedin className="text-gray-600 hover:text-orange-500 cursor-pointer" /></div></div>
              <div><h4 className="font-bold text-gray-900 dark:text-white uppercase mb-6">{t('footer.cols.store')}</h4><ul className="text-sm text-gray-600 dark:text-neutral-400 space-y-4"><li>S</li><li>M</li><li>L</li></ul></div>
              <div><h4 className="font-bold text-gray-900 dark:text-white uppercase mb-6">{t('footer.cols.info')}</h4><ul className="text-sm text-gray-600 dark:text-neutral-400 space-y-4"><li>Blog</li><li>FAQ</li></ul></div>
              <div><h4 className="font-bold text-gray-900 dark:text-white uppercase mb-6">{t('footer.cols.legal')}</h4><ul className="text-sm text-gray-600 dark:text-neutral-400 space-y-4"><li>Privacy</li><li>Terms</li></ul></div>
            </div>
            <div className="pt-8 flex justify-between items-center text-xs text-gray-500 uppercase tracking-widest"><p>© 2024 HABITARIA</p><div className="flex items-center gap-2"><Globe size={14} /><span>{language}</span></div></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HabitariaLanding;