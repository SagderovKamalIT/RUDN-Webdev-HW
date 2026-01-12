import AboutSection from "../AboutSection/AboutSection";
import Header from "../Header/Header";

import styles from "./HeaderAboutSection.module.scss";

const HeaderAboutSection = () => {
  return (

    <div className={styles.background} >

      <Header />
      <AboutSection />
    </div>


  )
}

export default HeaderAboutSection;