import { PaperPlaneTilt, Phone, LinkedinLogo, GithubLogo, GlobeSimple } from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

function Header() {
      const { t } = useTranslation();

      return (
            <header className="mb-12 mt-6 animate-fade-left animate-duration-500 animate-delay-500 animate-ease-linear">
                  <h1 className="text-2xl font-bold">{t('name')}</h1>
                  <p className="text-lg font-semibold">{t('title')}</p>
                  <p className="flex items-center gap-1 text-sm"><GlobeSimple /> {t('location')}</p>

                  <section className="flex gap-2 mt-4">

                        <a href="mailto:imano.arias@gmail.com">
                              <button className="border border-gray-200 rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-900">
                                    <PaperPlaneTilt />
                              </button>
                        </a>
                        <a href="tel:+5491128886097">
                              <button className="border border-gray-200 rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-900">
                                    <Phone />
                              </button>
                        </a>
                        <a href="https://www.linkedin.com/in/imanol-herrero-932956247/">
                              <button className="border border-gray-200 rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-900">
                                    <LinkedinLogo />
                              </button>
                        </a>
                        <a href="https://github.com/ImanolHerrero">
                              <button className="border border-gray-200 rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-900">
                                    <GithubLogo />
                              </button>
                        </a>
                  </section>
            </header>
      );
}

export default Header;
