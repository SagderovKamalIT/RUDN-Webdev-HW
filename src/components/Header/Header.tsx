import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";
import styles from "./Header.module.scss"

const Header = () => {
  return (

    <>

    
    <div className="header__wrap">

      <div className={styles.header}>
  
        <div className="wrap">
  
          <div className={styles.header__container}>
          
          <HeaderLogo />

          <HeaderNav />
  
            
          </div>
  
        </div>
 
    
    </div>

    </div>

    </>

  )
}

export default Header;