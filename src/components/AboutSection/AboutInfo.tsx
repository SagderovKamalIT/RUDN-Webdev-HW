import styles from "./AboutSection.module.scss"; 
import AboutSpan from "./AboutSpan";
import Title from "../Title/Title";
import AboutParagraph from "./AboutParagraph";
import Button from "../Button/Button";

interface AboutInfoProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  note?: React.ReactNode;        
  buttonLink?: string;           
  buttonLabel?: string;  
}

const AboutInfo = ({
  title = "Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт-Петербургу",
  subtitle = "Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.",
  note = (
    <>
      9 различных <br />
      видов на выбор
    </>
  ),
  buttonLink = "#assortment",
  buttonLabel = "Перейти в каталог",
}: AboutInfoProps) => {
  return (
    <div className={styles.about__info}>
      <AboutSpan>ВКУСНЕЙШИЕ</AboutSpan>

      <Title size="xl" tag="h1">
        {title}
      </Title>

      <AboutParagraph>{subtitle}</AboutParagraph>

      <div className={styles.about__action}>
        <Button href={buttonLink} size="large" variant="primary">
          {buttonLabel}
        </Button>

        <p className={styles.about__actionSubtext}>{note}</p>
      </div>
    </div>
  );
};

export default AboutInfo;
