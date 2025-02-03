import React from 'react'

function Footer() {
   const today = new Date();
   const year = today.getFullYear();
   return (
      <div>
         <div className="flex-1 border-t w-full mb-4" />
         <div className='flex items-center justify-between'>
            <h1>{year}. Imanol Herrero.</h1>
            <div className='flex gap-4'>
               <a href="mailto:imano.arias@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
               <a href="https://www.linkedin.com/in/imanol-herrero-932956247/" target="_blank" rel="noopener noreferrer">Linkedin</a>
               <a href="https://github.com/ImanolHerrero" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
         </div>
      </div>
   )
}

export default Footer