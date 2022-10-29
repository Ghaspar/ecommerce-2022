import styles from './style.module.scss'
import Image from 'next/image'


export default function Signup() {
  return (
    <>
    <div className="title text-center">
        <Image
        width='50'
        height='50'
        alt='Market Cubos'
        src='/images/logo.png'
        />
        <h1>
            Market Cubos
        </h1>
    </div>
    </>
  )
}