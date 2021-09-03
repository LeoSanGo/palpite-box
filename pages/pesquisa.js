import React from 'react';
import Link from 'next/link';

const Pesquisa = () => {
  return (
    <div className='pt-6'>
      <h1 className='text-center font-bold my-4 text-2xl'>Criticas e Sugestões</h1>
      <p className='text-center'>O restaurante X sempre busca por atender melhor seus clientes.<br/>
        Por isso estamos sempre abertos a ouvir a sua opinião</p>
      <div className='w-48 mx-auto bg-red-100'>
        <label>Seu nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 m-2'/>
      </div>
    </div>
  );
};

export default Pesquisa;
