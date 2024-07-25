import ThemeSwitch from "./components/ThemeSwitch";
import LanguageSwitch from "./components/LenguageSwitcher";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Proyects from "./components/Proyects";
import { useTranslation } from 'react-i18next';
import { Envelope } from "@phosphor-icons/react";

function App() {
  const { t } = useTranslation();
  return (
    <main className="max-w-screen-md mx-auto min-h-screen p-4 text-slate-800 dark:text-slate-300">
      <nav className="flex justify-end items-center gap-6 g-white">
        <a href="mailto:imano.arias@gmail.com">
          <button className="p-2 bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900 rounded shadow-md flex items-center gap-2">
            <Envelope />
            {t('cta_button')}
          </button>
        </a>
        <LanguageSwitch />
        <ThemeSwitch />
      </nav>

      <Header />
      <AboutMe />
      <WorkExperience />
      <Proyects />
    </main >
  );
}

export default App;