import ThemeSwitch from "./components/ThemeSwitch";
import LanguageSwitch from "./components/LenguageSwitcher";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useTranslation } from 'react-i18next';
import { Envelope } from "@phosphor-icons/react";
import icon from '../public/icon.png'

function App() {
   const { t } = useTranslation();
   return (
      <main className="max-w-screen-md mx-auto min-h-screen p-4 text-slate-900 dark:text-slate-100">
         <nav className="flex justify-between items-center gap-6 py-4 sticky top-0 z-50 bg-[#fcfcfc] dark:bg-zinc-900 border-b">
            <img src={icon} alt="Imanol Herrero Icon" className="h-10 w-10" />

            <div className="flex items-center gap-6">
               <a href="mailto:imano.arias@gmail.com">
                  <button className="p-2 bg-zinc-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900 rounded shadow-md flex items-center gap-2">
                     <Envelope />
                     {t('cta_button')}
                  </button>
               </a>
               <LanguageSwitch />
               <ThemeSwitch />
            </div>
         </nav>

         <Header />
         <AboutMe />
         <WorkExperience />
         <Proyects />
         <Skills />
         <Footer />
      </main >
   );
}

export default App;