import styles from './style.module.scss'
import Image from 'next/image'
import FormTitle from '../FormTitle'
import Link from 'next/link'

export default function SignUp() {
  return (
    <>
       
        <div className="container">
            <FormTitle />
            <form action="" className="text-center">
                <h2>cadastre-se</h2>
                <fieldset className={styles.formInputs}>
                    <div className={styles.formInput}>
                      <label htmlFor="store">Nome da loja</label>
                      <input type="store" id="store" name="store" />
                    </div>
                    <div className={styles.formInput}>
                      <label htmlFor="email">Senha</label>
                      <input type="password" id="password" name="password"/>
                    </div>
                    <div className={styles.formInput}>
                      <label htmlFor="password">Senha</label>
                      <input type="password" id="password" name="password"/>
                    </div>
                    <div className={styles.formInput}>
                      <label htmlFor="confirm_password">Confirme sua senha</label>
                      <input type="confirm_password" id="confirm_password" name="confirm_password"/>
                    </div>
                    <small>
                        Ao criar uma conta, você concorda com a nossa <Link  href="#">Política de Privacidade</Link> e <Link  href="#">Termos de serviço</Link>
                    </small>
                    <button type="submit" className="btn btn-primary bg-secondary rounded-pill">Fazer login</button>
                    <small>
                      Não possui conta? <Link  href="/cadastro">Cadastre-se</Link>
                    </small>
                </fieldset>
            </form>
        </div>
        
        
    </>
  )
}