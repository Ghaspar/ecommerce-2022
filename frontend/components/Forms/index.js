import styles from './style.module.scss'
import Image from 'next/image'
import SingUpForm from './SingUp'
import SingInForm from './SignIn'


export default function Forms({currentForm}) {
  return (
    <>
      <section className={styles.singup+ " shadow mt-5"}>
           <div className="container">
              {
                currentForm == "cadastro"
                ?
                <SingUpForm />
                :
                <SingInForm />
              }
           </div>
      </section>
        
    </>
  )
}