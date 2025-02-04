import { useTranslation } from 'react-i18next';
import { Folder, GithubLogo } from '@phosphor-icons/react';

const projects = [
   {
      name: 'DictionaryApp',
      url: 'https://dictionary-apiproject.vercel.app/',
      repo: 'https://github.com/ImanolHerrero/dictionary',
      description: 'project1_description',
      tags: ['API', 'NextJS', 'TailwindCSS']
   },
   {
      name: 'Shortly',
      url: 'https://shortlyapi.netlify.app/',
      repo: 'https://github.com/ImanolHerrero/Shortly-API',
      description: 'project2_description',
      tags: ['API', 'HTML', 'SCSS', 'JavaScript']
   },
   {
      name: 'EventoX',
      url: '',
      repo: 'https://github.com/EventoX/EVENTOX_CLIENT',
      description: 'project3_description',
      tags: ['CRUD', 'Admin Panel', 'Team Project', 'NextJS', 'CSS', 'Auth', 'Checkout']
   },
   {
      name: 'NewsApp',
      url: 'https://news-app-indol-seven.vercel.app/',
      repo: 'https://github.com/ImanolHerrero/NewsApp',
      description: 'project4_description',
      tags: ['API', 'ReactJS', 'TailwindCSS', 'TypeScript', 'shadcn/ui']
   }
];

function Projects() {
   const { t } = useTranslation();

   return (
      <section className='mb-12'>
         <div className="flex items-center mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
               <Folder />
               <p>{t('proyect_title')}</p>
            </h1>
            <div className="flex-1 border-t ml-4" />
         </div>
         <section className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {projects.map(({ name, url, repo, description, tags }) => (
               <div key={name} className='border rounded p-2'>
                  <div className='flex items-center gap-2 mb-2'>
                     {url ? (
                        <a href={url} target='_blank' rel='noopener noreferrer'>
                           <h1 className='font-bold'>{name}</h1>
                        </a>
                     ) : (
                        <h1 className='font-bold'>{name}</h1>
                     )}
                     <a href={repo} target='_blank' rel='noopener noreferrer'>
                        <GithubLogo />
                     </a>
                  </div>
                  <p>{t(description)}</p>
                  <footer className='flex flex-wrap gap-2 mt-2'>
                     {tags.map(tag => (
                        <span key={tag} className='bg-gray-100 dark:bg-zinc-700 rounded p-1'>{tag}</span>
                     ))}
                  </footer>
               </div>
            ))}
         </section>
      </section>
   );
}

export default Projects;