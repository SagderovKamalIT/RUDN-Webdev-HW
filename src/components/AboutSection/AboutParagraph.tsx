import styles from "../AboutSection/AboutSection.module.scss"

interface AboutParagraphProps {
     children: React.ReactNode;
}


const AboutParagraph = ({children}: AboutParagraphProps) => {
  return (
     <p className={styles.about__infoDescription} >
      {children}
     </p>
  )
}

export default AboutParagraph;