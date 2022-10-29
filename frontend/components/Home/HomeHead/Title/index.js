import styles from './style.module.scss'
import Image from 'next/image'

export default function HomeHead() {
  return (
    <>
        <div className={styles.title+" text-center d-flex align-items-center"}>
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