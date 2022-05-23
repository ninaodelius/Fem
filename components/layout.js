import Footer from './footer'
import styles from '/styles/components/layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <div className={styles.footer}>
      <Footer />    
      </div>
      
    </>
  )
}