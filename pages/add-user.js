import { useState } from 'react';
// import { PrismaClient } from '@prisma/client';

export default function AddUser() {
  const [username, setUsername] = useState('名無しさん');
  const [usermemo,setUsermemo] = useState('');
  const [result, setResult] = useState('');

  const handlerChange = (e) => {
    setUsername(e.target.value);
  };
  const handlerChanges = (e) => {
    setUsermemo(e.target.value);
  };

  const handlerClick = (e) => {
    fetch(
      '/api/add',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: username,
          memo: usermemo
        })
      },
      // {
      //   method: 'GET'
      // }
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setResult('追加しました。');
        // setResult(json.dates);
      });
  };

  return (
    <div>
      <h1>ユーザーの追加</h1>

      <div>
        <input
          type="text"
          value={username}
          onChange={handlerChange}
        />
        <input
          type="text"
          value={usermemo}
          onChange={handlerChanges}
        />
        <button onClick={handlerClick}>
          追加
        </button>
      </div>
      <div>
      {result}       
      </div>
    </div>
  );
}