import styles from './Features.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';

export default function Features(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  features: {
    title: string,
    text: string,
    illustration: string,
  }[],
  background?: 'normal' | 'alternate',
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} background={p.background}>
      <div  data-aos="fade-down"  data-aos-delay="200">

      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>
      </div>


      <ul className={styles.features}>
        {p.features.map((item, i) => {
          if(i % 2 == 0) {
            return (
                <li key={i} className={styles.feature} data-aos="fade-up-right">
                  <img src={item.illustration} className={styles['feature-illustration']}/>
                  <div className={styles['feature-content']}>
                    <h3 className={styles['feature-title']}>{item.title}</h3>
                    <p className={styles['feature-text']}>{item.text}</p>
                  </div>
                </li>
            );
          }else{
            return (
                <li key={i} className={styles.feature} data-aos="fade-up-left">
                  <img src={item.illustration} className={styles['feature-illustration']}/>
                  <div className={styles['feature-content']}>
                    <h3 className={styles['feature-title']}>{item.title}</h3>
                    <p className={styles['feature-text']}>{item.text}</p>
                  </div>
                </li>
            );
          }
        })}
      </ul>
    </Section>
  );
}
