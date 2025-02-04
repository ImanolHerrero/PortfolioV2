import { PaperPlaneTilt, Phone, LinkedinLogo, GithubLogo, GlobeSimple, FileArrowDown } from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

const IconButton = ({ href, icon: Icon, download = false }) => (
      <a href={href} {...(download ? { download: true } : {})}>
            <button className="border border-gray-200 rounded p-2 hover:bg-gray-100 dark:hover:bg-zinc-800">
                  <Icon />
            </button>
      </a>
);

function Header() {
      const { t } = useTranslation();

      const contacts = [
            { href: "mailto:imano.arias@gmail.com", icon: PaperPlaneTilt },
            { href: "tel:+5491128886097", icon: Phone },
            { href: "https://www.linkedin.com/in/imanol-herrero-932956247/", icon: LinkedinLogo },
            { href: "https://github.com/ImanolHerrero", icon: GithubLogo },
            { href: "/ImanolHerreroCV.pdf", icon: FileArrowDown, download: true }
      ];

      return (
            <header className="mb-12 mt-6">
                  <h1 className="text-2xl font-bold">{t('name')}</h1>
                  <p className="text-lg font-semibold">{t('title')}</p>
                  <p className="flex items-center gap-1 text-sm">
                        <GlobeSimple /> {t('location')}
                  </p>

                  <section className="flex gap-2 mt-4">
                        {contacts.map((contact, index) => (
                              <IconButton key={index} {...contact} />
                        ))}
                  </section>
            </header>
      );
}

export default Header;
