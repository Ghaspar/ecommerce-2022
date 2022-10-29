import styles from './style.module.scss'
import Image from 'next/image'
import SingUpForm from './Singup'


export default function Forms({currentForm}) {
  return (
    <>
      <section className={styles.singup+ " shadow mt-5"}>
           <div className="container">
              <SingUpForm />
           </div>
      </section>
        
    </>
  )
}