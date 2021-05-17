import { useState } from 'react';

function LogIn()  {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');


  function handleChangeValue (e, type)  {
    if (type === 'login') {
      setLogin(e.target.value)
    }
    if (type === 'password') {
      setPassword(e.target.value)
    }
  }

  function handleEnter () {
    console.log(login, password)
    setLogin('');
    setPassword('');

  }
  return (
    <div>
      <div style={{width: '400px', 
          border: '1px solid red', 
          textAlign: 'center'}}
      >
        <h1>Залогиниться</h1>
        <div>
           <label>Логин: </label>
          <input 
            value={login}
            onChange={(e)=> handleChangeValue(e, 'login')}></input>
        </div>
        <div>
           <label>Пороль: </label>
          <input
            value={password}
            onChange={(e)=> handleChangeValue(e, 'password')}>
          </input>
          <div>
            <button onClick ={() => handleEnter()}>Войти</button> 
          </div>       
        </div>
      </div>
    </div>
  )
}

export default LogIn;
