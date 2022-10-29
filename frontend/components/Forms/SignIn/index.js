import styles from './style.module.scss'
import Image from 'next/image'
import FormTitle from '../FormTitle'
import Link from 'next/link'

export default function Signip() {
  return (
    <>
       
       <div className="container">
            <FormTitle />
            <form action="" className="text-center">
                <h2>Boas-vindas!</h2>
                <p>Use seu e-mail e senha para acessar a conta</p>
                <fieldset className={styles.formInputs}>
                    <div className={styles.formInput}>
                      <label htmlFor="email">E-mail</label>
                      <input type="email" id="email" name="email" placeholder="exemplo@email.com" />
                    </div>
                    <div className={styles.formInput}>
                      <label htmlFor="email">Senha</label>
                      <input type="password" id="password" name="password" placeholder="Insira sua senha" />
                    </div>
                    <button type="submit" className="btn btn-primary bg-secondary rounded-pill">Fazer login</button>
                </fieldset>
                <small>
                    Não possui conta? <Link  href="/cadastro">Cadastre-se</Link>
                </small>
            </form>
        </div>
        
        
    </>
  )
}