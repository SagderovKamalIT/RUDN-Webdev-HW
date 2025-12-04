import styles from "./AboutSection.module.scss";
import AboutInfo from "./AboutInfo";

const AboutSection = () => {
  return (
    <>
      <div className={styles.about}>
        <div className="wrap">
          <div className={styles.about__container}>
           
              <AboutInfo />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
