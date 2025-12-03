import styles from "../AboutSection/AboutSection.module.scss"

interface AboutButtonProps {
  href?: string;
  children: string;
  className?: string;
}

const AboutButton = ({children, href, className}: AboutButtonProps) => {
  return (

    <a href={href} className={`${styles.about__actionButton} ${className || ""} `}>
      {children}
    </a>

  )
}

export default AboutButton;