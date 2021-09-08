import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por: {' '}
        <a className='hover:underline' href=''>Leo Gonçalves</a> / {} 
        <a className='hover:underline' href='https://www.linkedin.com/in/leosangoncalves/'>Linkedin</a> / {}
        <a className='hover:underline' href='https://www.github.com/leosango'>Github</a>
        <div className='mt-2'>
          <img className='inline p-4 w-40' src='logo_semana_fsm.png' />
          <img className='inline p-4 w-40' src='logo_devpleno.png' />
        </div>
      </div>
    </div>
  )
}

export default Footer