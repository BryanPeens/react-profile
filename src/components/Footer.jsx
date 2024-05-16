import React from 'react';

import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>


        <div className='flex flex-col max-w-[1024px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>React Is Awesome!</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <a href='https://www.linkedin.com/in/bryan-peens-558113204/' target="_blank"><FaLinkedin/></a>
                <a href='https://github.com/BryanPeens' target="_blank"><FaGithub/></a>
                <a href='https://stackoverflow.com/' target="_blank"><FaStackOverflow/></a>
            </div>
        </div>


    </div>
  )
}

export default Footer