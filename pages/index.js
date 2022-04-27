import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/button.jsx'


export default function Home() {
  return (
    <Button disabled={false}>Logga in</Button>
  )
}
