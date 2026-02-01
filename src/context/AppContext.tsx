"use client";
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// --- TYPES AND INTERFACES ---
export type Lang = 'es' | 'en' | 'ru' | 'zh';
export type Theme = 'light' | 'dark';

export interface TranslationSchema {
  [key: string]: string | string[] | TranslationSchema;
}

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  language: Lang;
  setLanguage: (language: Lang) => void;
  t: (key: string) => any;
}

// --- TRANSLATIONS OBJECT ---
const translations: { [key in Lang]: TranslationSchema } = {
    es: {
      nav: { models: "Modelos", phil: "Filosofía", proj: "Proyectos", serv: "Servicios", store: "Tienda", contact: "Contacto" },
      hero: {
        pre: "Arquitectura & Diseño",
        title1: "Diseño",
        title2: "Eterno",
        title3: "Calidad",
        title4: "Robusta",
        desc: "Creamos espacios que desafían el tiempo. Ahora introduciendo nuestra línea modular de alto rendimiento.",
        cta1: "Ver Colección Modular",
        cta2: "Nuestra Esencia"
      },
      modular: {
        newCol: "Nueva Colección",
        title: "Modular",
        subtitle: "Ingeniería desplegable. Acabado Microcemento Arena. Listo para habitar.",
        delivery: "Entrega Inmediata",
        finish: "Acabado Seleccionado",
        finishName: "Microcemento Arena (Estándar)",
        finishNote: "*Imagen referencial. El acabado final es idéntico en todos los modelos.",
        basePrice: "Precio Base",
        btnBuy: "Reservar Unidad",
        btnInfo: "Ver Ficha Técnica"
      },
      models: {
        small: { name: "Modelo S (Compact)", tagline: "El módulo esencial.", desc: "La unidad fundamental. Un contenedor optimizado al máximo. Perfecto como oficina de jardín o suite.", specs: ["Módulo Único", "Transporte Camión", "Instalación 24h"] },
        medium: { name: "Modelo M (Expand)", tagline: "Expansión inteligente.", desc: "Ingeniería desplegable. Al módulo central se le suma 1 ala lateral (+2.7m), duplicando el espacio vital.", specs: ["1 Módulo + 1 Ala", "Ancho: 5.2m", "Plegable"] },
        large: { name: "Modelo L (Grand)", tagline: "Residencia completa.", desc: "Máxima habitabilidad. Despliega alas a ambos lados (+2.7m cada una) para crear una residencia familiar completa.", specs: ["1 Módulo + 2 Alas", "Ancho: 7.9m", "Plegable"] }
      },
      footer: {
        talk: "Hablemos",
        future: "de futuro.",
        desc: "¿Listo para construir? Ya sea un modelo modular o un diseño a medida.",
        form: { name: "Nombre", interest: "Interés", msg: "Mensaje", btn: "Enviar Mensaje" },
        cols: { brand: "Marca", store: "Tienda Modular", info: "Conocimiento", legal: "Legal" },
        links: { all: "Ver Modelos", cust: "Personalizar", blog: "Blog", faq: "Preguntas Frecuentes", priv: "Privacidad", term: "Términos" }
      }
    },
    en: {
      nav: { models: "Models", phil: "Philosophy", proj: "Projects", serv: "Services", store: "Store", contact: "Contact" },
      hero: {
        pre: "Architecture & Design",
        title1: "Timeless",
        title2: "Design",
        title3: "Robust",
        title4: "Quality",
        desc: "Creating spaces that defy time. Now introducing our high-performance modular line.",
        cta1: "View Modular Collection",
        cta2: "Our Essence"
      },
      modular: {
        newCol: "New Collection",
        title: "Modular",
        subtitle: "Deployable engineering. Sand Microcement finish. Ready to inhabit.",
        delivery: "Immediate Delivery",
        finish: "Selected Finish",
        finishName: "Sand Microcement (Standard)",
        finishNote: "*Reference image. Final finish is identical across all models.",
        basePrice: "Base Price",
        btnBuy: "Reserve Unit",
        btnInfo: "View Specs"
      },
      models: {
        small: { name: "Model S (Compact)", tagline: "The essential module.", desc: "The fundamental unit. A fully optimized container. Perfect as a garden office or guest suite.", specs: ["Single Module", "Truck Transport", "24h Install"] },
        medium: { name: "Model M (Expand)", tagline: "Smart expansion.", desc: "Deployable engineering. The central module adds 1 side wing (+2.7m), doubling the living space.", specs: ["1 Module + 1 Wing", "Width: 5.2m", "Foldable"] },
        large: { name: "Model L (Grand)", tagline: "Full residence.", desc: "Maximum habitability. Deploys wings on both sides (+2.7m each) to create a full family residence.", specs: ["1 Module + 2 Wings", "Width: 7.9m", "Foldable"] }
      },
      footer: {
        talk: "Let's talk",
        future: "about future.",
        desc: "Ready to build? Whether it's a modular model or a custom design.",
        form: { name: "Name", interest: "Interest", msg: "Message", btn: "Send Message" },
        cols: { brand: "Brand", store: "Modular Store", info: "Knowledge", legal: "Legal" },
        links: { all: "View Models", cust: "Customize", blog: "Blog", faq: "FAQ", priv: "Privacy", term: "Terms" }
      }
    },
    ru: {
      nav: { models: "Модели", phil: "Философия", proj: "Проекты", serv: "Услуги", store: "Магазин", contact: "Контакты" },
      hero: {
        pre: "Архитектура и Дизайн",
        title1: "Вечный",
        title2: "Дизайн",
        title3: "Надежное",
        title4: "Качество",
        desc: "Мы создаем пространства, неподвластные времени. Представляем нашу модульную линию.",
        cta1: "Модульная Коллекция",
        cta2: "Наша Суть"
      },
      modular: {
        newCol: "Новая Коллекция",
        title: "Модульный",
        subtitle: "Раскладная инженерия. Отделка Песчаный Микроцемент. Готовность к заселению.",
        delivery: "Быстрая доставка",
        finish: "Выбранная отделка",
        finishName: "Песчаный Микроцемент",
        finishNote: "*Референс. Отделка идентична для всех моделей.",
        basePrice: "Базовая цена",
        btnBuy: "Забронировать",
        btnInfo: "Характеристики"
      },
      models: {
        small: { name: "Модель S (Компакт)", tagline: "Базовый модуль.", desc: "Фундаментальная единица. Оптимизированный контейнер. Идеально для офиса.", specs: ["Один модуль", "Автоперевозка", "Монтаж 24ч"] },
        medium: { name: "Модель M (Расширенный)", tagline: "Умное расширение.", desc: "Раскладная инженерия. К центральному модулю добавляется 1 крыло (+2.7м).", specs: ["1 Модуль + 1 Крыло", "Ширина: 5.2м", "Складной"] },
        large: { name: "Модель L (Гранд)", tagline: "Полная резиденция.", desc: "Максимальный комфорт. Раскрывает крылья с обеих сторон (+2.7м каждое).", specs: ["1 Модуль + 2 Крыла", "Ширина: 7.9м", "Складной"] }
      },
      footer: {
        talk: "Поговорим",
        future: "о будущем.",
        desc: "Готовы строить? Будь то модульная модель или индивидуальный проект.",
        form: { name: "Имя", interest: "Интерес", msg: "Сообщение", btn: "Отправить" },
        cols: { brand: "Бренд", store: "Магазин", info: "Инфо", legal: "Легально" },
        links: { all: "Все модели", cust: "Настроить", blog: "Блог", faq: "FAQ", priv: "Приватность", term: "Условия" }
      }
    },
    zh: {
      nav: { models: "型号", phil: "理念", proj: "项目", serv: "服务", store: "商店", contact: "联系" },
      hero: {
        pre: "建筑与设计",
        title1: "永恒",
        title2: "设计",
        title3: "坚固",
        title4: "品质",
        desc: "创造超越时代的空间。现在推出我们的高性能模块化系列。",
        cta1: "查看模块化系列",
        cta2: "我们的精髓"
      },
      modular: {
        newCol: "新系列",
        title: "模块化",
        subtitle: "可展开工程。砂质微水泥饰面。即可入住。",
        delivery: "立即交付",
        finish: "选定饰面",
        finishName: "砂质微水泥 (标准)",
        finishNote: "*参考图片。最终饰面在所有型号中都是相同的。",
        basePrice: "基础价格",
        btnBuy: "立即预订",
        btnInfo: "查看规格"
      },
      models: {
        small: { name: "型号 S (紧凑型)", tagline: "基本模块。", desc: "基本单元。完全优化的集装箱。非常适合作为花园办公室。", specs: ["单模块", "卡车运输", "24小时安装"] },
        medium: { name: "型号 M (扩展型)", tagline: "智能扩展。", desc: "可展开工程。中央模块增加1个侧翼（+2.7米），生活空间翻倍。", specs: ["1模块 + 1翼", "宽度: 5.2m", "可折叠"] },
        large: { name: "型号 L (豪华型)", tagline: "完整住宅。", desc: "最大的居住性。双侧展开翼（各+2.7米），打造完整的家庭住宅。", specs: ["1模块 + 2翼", "宽度: 7.9м", "可折叠"] }
      },
      footer: {
        talk: "让我们谈谈",
        future: "未来。",
        desc: "准备好建造了吗？无论是模块化模型还是定制设计。",
        form: { name: "姓名", interest: "兴趣", msg: "留言", btn: "发送信息" },
        cols: { brand: "品牌", store: "模块化商店", info: "知识", legal: "法律" },
        links: { all: "查看型号", cust: "定制", blog: "博客", faq: "常见问题", priv: "隐私", term: "条款" }
      }
    }
  };
  

// --- CONTEXT CREATION ---
const AppContext = createContext<AppContextType | undefined>(undefined);

// --- CUSTOM HOOK ---
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// --- PROVIDER COMPONENT ---
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Lang>('es');

  // --- THEME LOGIC ---
  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // --- TRANSLATION LOGIC ---
  const t = (key: string): any => {
    const keys = key.split('.');
    let result: string | string[] | TranslationSchema = translations[language];

    for (const k of keys) {
      const current = result as TranslationSchema;
      if (current[k] === undefined) {
        return key;
      }
      result = current[k];
    }
    return result;
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    language,
    setLanguage,
    t,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};