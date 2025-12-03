import styles from '../AboutSection/AboutSection.module.scss';

interface AboutSpanProps {
  children: string;
}

const AboutSpan = ({children}: AboutSpanProps) => {

  return (
        <span className={styles.about__infoSpan}>{children}</span>
  )
}

export default AboutSpan;