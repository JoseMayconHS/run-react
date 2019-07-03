import React from 'react'

export default props =>
  <form name='forgot' className='area-form' onSubmit={props.submit}>
  <div className='area-header'>
    <span className='title-form'>Mude sua senha</span><span className='message'> { props.message } </span>
  </div>
    <hr />
    <div className='area-input'>
      <input className='input' id='emailesquecido' type='email' name='data-email' onChange={e => props.setData(e, 3)} required /><label htmlFor='emailesquecido'>Email</label>
    </div>
    <div className='area-input'>
      <input className='input' id='senhaesquecida' type='password' name='data-password' onChange={e => props.setData(e, 3)} required /><label htmlFor='senhaesquecida'>Senha</label>
    </div>
    <div className='area-input'>
      <input className='input' id='novasenha1' type='password' name='data-new-password1' required /><label htmlFor='novasenha1'>Nova senha</label>
    </div>
    <div className='area-input'>
      <input className='input' id='novasenha2' type='password' name='data-new-password2' required /><label htmlFor='novasenha2'>Repita a nova senha</label>
    </div>
    <div className='area-submit'>
      <input className='btn-primary' type='submit' value='Mudar' />
      <input className='btn-second' type='button' value='Voltar' onClick={() => props.closeModal('forgot')} />
    </div>
  </form>
