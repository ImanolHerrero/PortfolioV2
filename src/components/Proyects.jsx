import { useTranslation } from 'react-i18next';
import { Folder, GithubLogo } from '@phosphor-icons/react'

function Proyects() {
      const { t } = useTranslation();
      return (
            <section className='animate-fade-left animate-duration-500 animate-delay-1000 animate-ease-linear mb-12'>
                  <div className='flex items-center gap-2 mb-2'>
                        <Folder className='text-2xl' />
                        <h1 className='text-2xl font-bold'>{t(('proyect_title'))}</h1>
                  </div>
                  <section className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div className='border rounded p-2'>
                              <div className='flex items-center gap-2 mb-2'>
                                    <a href="https://dictionary-apiproject.vercel.app/" target="_blank" rel="noopener noreferrer">
                                          <h1 className='font-bold'>DictionaryApp</h1>
                                    </a>
                                    <a href="https://github.com/ImanolHerrero/dictionary" target="_blank" rel="noopener noreferrer"><GithubLogo /></a>
                              </div>
                              <p>{t('project1_description')}</p>
                              <footer className='flex flex-wrap gap-2 mt-2'>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>API</span>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>NextJS</span>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>TailwindCSS</span>
                              </footer>
                        </div>
                        <div className='border rounded p-2'>
                              <div className='flex items-center gap-2 mb-2'>
                                    <a href="https://shortlyapi.netlify.app/" target="_blank" rel="noopener noreferrer">
                                          <h1 className='font-bold'>Shortly</h1>
                                    </a>
                                    <a href="https://github.com/ImanolHerrero/Shortly-API" target="_blank" rel="noopener noreferrer"><GithubLogo /></a>
                              </div>
                              <p>{t('project2_description')}</p>
                              <footer className='flex flex-wrap gap-2 mt-2'>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>API</span>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>HTML</span>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>SCSS</span>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>JavaScript</span>
                              </footer>
                        </div>
                        <div className='border rounded p-2'>
                              <div className='flex items-center gap-2 mb-2'>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                          <h1 className='font-bold'>EventoX</h1>
                                    </a>
                                    <a href="https://github.com/EventoX/EVENTOX_CLIENT" target="_blank" rel="noopener noreferrer"><GithubLogo /></a>
                              </div>
                              <p>{t('project3_description')}</p>
                              <footer className='flex flex-wrap gap-2 mt-2'>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>CRUD</span>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>Admin Panel</span>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>Team Project</span>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>NextJS</span>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>CSS</span>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>Auth</span>
                                    <span className='bg-gray-100 dark:bg-gray-900 rounded p-1'>Checkout</span>
                              </footer>
                        </div>

                  </section>


            </section>
      )
}

export default Proyects