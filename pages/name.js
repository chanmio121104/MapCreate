import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Name() {
  const router = useRouter();
  const [memo, setMemo] = useState('');

  useEffect(() => {
    if (router.query.name === undefined) {
      return;
    }

    fetch(
      `/api/${router.query.name}`,
      {
        method: 'GET'
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setMemo(json.memo);
      });
  }, [router.query.name]);

  return (
    <div>
      こんにちは！{router.query.name}さん！
      あなたの説明には「{memo}」と書かれています。
    </div>
  );
}

