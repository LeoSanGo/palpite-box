import React, { useState } from 'react';
import Link from 'next/link';


const Pesquisa = () => {
  const [ form, setForm ] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
  
  });

  const [ success, setSuccess ] = useState(false);
  const [ retorno, setRetorno ] = useState({});


  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      const data = await response.json();
      setSuccess(true);
      setRetorno(data);
    } catch (err) {}
  };
  const onChange = evt => {
    const value = evt.target.value;
    const key = event.target.name;
    setForm(old => ({
      ...old,
      [key]: value,
    }));
  }
  return (
    <div className='pt-6'>
      <h1 className='text-center font-bold my-4 text-2xl'>
        Criticas e Sugestões
      </h1>
      <p className='text-center mb-6'>
        O restaurante X sempre busca por atender melhor seus clientes.
        <br />
        Por isso estamos sempre abertos a ouvir a sua opinião
      </p>
      { !success && <div className='w-1/5 mx-auto '>
        <label className='font-bold'>Seu nome:</label>
        <input type='text'className='p-4 block shadow bg-blue-100 m-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>Email:</label>
        <input type='text'className='p-4 block shadow bg-blue-100 m-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>Whatsapp:</label>
        <input type='text'className='p-4 block shadow bg-blue-100 m-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <button
          className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'
          onClick={save}
        >
          Salvar
        </button>
       
      </div> }
      { success && <div className='w-1/5 mx-auto'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou sua critica</p>
        {
          retorno.showCupom && <div className='text-center'>
            Seu cupom: <br />
            <spam className='font-bold'>{retorno.Cupom}</spam>
          </div>
        }
        cupom: {JSON.stringify(retorno)}</div>}
    </div>
  );
};

export default Pesquisa;
