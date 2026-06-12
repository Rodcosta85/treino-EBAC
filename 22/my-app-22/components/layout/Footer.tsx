import Link from 'next/link'
import footerStyles from './../../modules/Footer.module.css'
import logoPrincipal from './../../public/logo-principal.png'

const Footer = () => {
  return (
    <footer className={footerStyles.footerSection}>
      <div className={footerStyles.mainDivFooter}>
        <img src={logoPrincipal.src} alt="" className={footerStyles.logoPrincipalImg} />
        <nav className={footerStyles.navigation}>
          <Link href="/about" className={footerStyles.navigationItem}>ABOUT</Link>
          <Link href="/destinations" className={footerStyles.navigationItem}>DESTINATIONS</Link>
          <Link href="/contact" className={footerStyles.navigationItem}>CONTACT</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer