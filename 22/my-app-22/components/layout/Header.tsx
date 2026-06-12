'use client'
import Link from "next/link"
import headerStyles from "./../../modules/Header.module.css"
import useDestination from "../../hooks/useDestination"
import LogoJustificado from "../../public/logo-justificado.png"

const Header = () => {

  const { toggleHamb, setToggleHamb } = useDestination()

  return (
    <header className={headerStyles.headerSection}>
      <div className={headerStyles.mainDivHeader}>
        {/* container da imagem e do menu hamburger */}
        <div className={headerStyles.imgHamb}>
          <Link href="/">
            <img
              src={LogoJustificado.src}
              alt=""
              className={headerStyles.logo} />
          </Link>

          <div className={headerStyles.navsWrapper}>
            {/* links desktop + btn tablet pequeno/mobile */}
            <nav className={headerStyles.navigation}>
              <Link href="/about" className={headerStyles.navigationItem}>ABOUT</Link>
              <Link href="/destinations" className={headerStyles.navigationItem}>DESTINATIONS</Link>
              <Link href="/contact" className={headerStyles.navigationItem}>CONTACT</Link>
            </nav>
            <div className={headerStyles.navBtnWrapper}>
              {/* Hamburger Button */}
              <button
                onClick={setToggleHamb}
                type="button"
                className={headerStyles.menuButton}
              >
                {/* Hamburger Icon Lines */}
                <div className={`${headerStyles.longLine} ${toggleHamb ? headerStyles.longLineTwistOne : ''}`}></div>
                <div className={`${headerStyles.longLine} ${toggleHamb ? headerStyles.longLineGone : ''}`}></div>
                <div className={`${headerStyles.longLine} ${toggleHamb ? headerStyles.longLineTwistTwo : ''}`}></div>
              </button>

              {/* Navigation Menu - Clean class swapping */}
              <nav className={toggleHamb ? headerStyles.navigationMobile : headerStyles.navigationMobileHidden}>
                <Link href="/about" className={headerStyles.navigationItemMobile}>ABOUT</Link>
                <Link href="/destinations" className={headerStyles.navigationItemMobile}>DESTINATIONS</Link>
                <Link href="/contact" className={headerStyles.navigationItemMobile}>CONTACT</Link>
              </nav>
            </div>
          </div>


        </div>
      </div>
    </header>
  )
}

export default Header