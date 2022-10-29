import styles from './style.module.scss'
import Title from './Title'
import { Cart3, ShopWindow, PersonCircle, CurrencyDollar} from 'react-bootstrap-icons';
import Link from 'next/link'

export default function HomeHead() {
  return (
    <>
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-3"><Title /></div>
            <div className="col-lg-2 offset-lg-1">
                <Link href="/carrinho">
                    <Cart3 />
                    <span className="ps-2">
                        Meu carrinho   
                    </span>
                </Link>
            </div>
            <div className="col-lg-2">
                <Link href="/carrinho">
                    <ShopWindow />
                    <span className="ps-2">
                        Meus anúncios
                    </span>
                </Link>
            </div>
            <div className="col-lg-2">
                <Link href="/carrinho">
                    <PersonCircle />
                    <span className="ps-2">
                        Usuário
                    </span>
                </Link>
            </div>
            <div className="col-lg-2">
                <Link class={styles.btnComponent+" btn btn-primary bg-secondary rounded-pill"} href="/carrinho">
                    <CurrencyDollar />
                    <span className="ps-2">
                        Quero vender
                    </span>
                </Link>
            </div>
        </div>
    </>
  )
}