import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from '@/styles/Home.module.css'
import Form from './components/Form';
import { useSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });
const {data: session, status} = useSession;

export default function Home() {
  return (
    <div>
      {session ? 
        <p>You are logged in!</p> :
        (<p>You are not logged in 😞
          <a href='/api/auth/signin'>Login</a>
        </p>)
      }
    </div>
  )

}
