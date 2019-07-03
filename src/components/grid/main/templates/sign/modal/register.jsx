import React from 'react'

export default props =>
  <form name='register' className='area-form' onSubmit={props.submit}>
    <div className='area-header'>
      <span className='title-form'>Registro</span><span className='message'> { props.message } </span>
    </div>
    <hr />
    <div className='area-input'>
      <input className='input' id='nome' type='text' name='data-name' onChange={e => props.setData(e, 2)} required /><label htmlFor='nome'>Nome</label>
    </div>
    <div className='area-input'>
      <input className='input' id='email-register' type='email' name='data-email' onChange={e => props.setData(e, 2)} required /><label htmlFor='email-register'>Email</label>
    </div>
    <div className='area-input'>
      <input className='input' id='senha1' type='password' name='data-password' onChange={e => props.setData(e, 2)} required /><label htmlFor='senha1'>Senha</label>
    </div>
    <div className='area-input'>
      <input className='input' id='senha2' type='password' name='data-password2' required /><label htmlFor='senha2'>Digite a senha novamente</label>
    </div>
    <div className='area-submit'>
      <input className='btn-primary' type='submit' value='Criar' />
      <input className='btn-second' type='button' value='Voltar' onClick={() =>props.closeModal('register')} />
    </div>
  </form>
