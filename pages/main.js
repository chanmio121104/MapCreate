import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Main.module.css';
import Head from 'next/head'
import Image from 'next/image';


export default function Name() {
  // const query = useState();
  const router = useRouter();
  const [SScity, setSScity] = useState('');
  const [place, setplace] = useState('');


  const handlerChange = (e) => {
    setSScity(e.target.value);
  };
  const handlerClick = (e) => {

    fetch(
      `/api/${SScity}`,
      {
        method: 'GET'
      }
    )
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
        throw new Error('server error')
      })
      .then((json) => {
        setplace(json.place);
      });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Ticket Creater</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <a className={styles.text}>TRAVEL CREATER</a>
        <div className={styles.city}>
          <input
              type="text"
              value={SScity}
              onChange={handlerChange}
              placeholder="市町村"
            />
            <button onClick={handlerClick}>
              検索
            </button>
        </div>
          {/* <a className={styles.city}>{SScity}</a> */}
          <a className={styles.place}>{place}</a>
        <span className={styles.ticket}>
            <Image src="/S__4538374.jpg"  width={600} height={200} />
        </span>
      </main>
    </div>
  );
}