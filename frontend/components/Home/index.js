import styles from './style.module.scss'
import HomeHead from './HomeHead'
import HomeContent from './HomeCards'


export default function Home() {
  return (
    <>
     <header className={styles.homeHeader}>
      <div className="container">
        <HomeHead />
      </div>
     </header>
     <main>
        <HomeContent />
     </main>
        
    </>
  )
}