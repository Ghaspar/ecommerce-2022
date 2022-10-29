import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeCards() {
  return (
    <>
        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-3">
                    <article className={styles.prodContent+" bg-white p-4"}>
                        <Link href={{
                                pathname: '/produtos/[id]',
                                query: { id: '1' }
                        }}>
                            <Image 
                                width='342'
                                height='342'
                                alt='Blusa de Moletom Manga Comprida  Dinossauro  - Tam: G'
                                src='/images/prods/prod1.png' 
                                className='img-fluid'
                            />
                            <h2>
                                Blusa de Moletom Manga Comprida  Dinossauro  - Tam: G
                            </h2>
                            <h3 className='pt-2'>R$139,90</h3>
                        </Link>
                    </article>
                </div>
            </div>
        </div>
        
    </>
  )
}