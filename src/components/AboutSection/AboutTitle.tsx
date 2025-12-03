import styles from "../AboutSection/AboutSection.module.scss"

interface AboutTitleProps {
     children: string;
}

const AboutTitle = ({children}: AboutTitleProps) => {
  return (

      <h1 className={styles.about__infoTitle} >
        {children}
      </h1>

  )
}

export default AboutTitle;