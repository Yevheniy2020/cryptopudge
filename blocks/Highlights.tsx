import styles from './Highlights.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';

export default function Highlights(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  highlights: {
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

      <ul className={styles.highlights}>
        {p.highlights.map((item, i) => {
          if(i % 2 == 0) {

            return (
                <li key={i} className={styles.highlight} data-aos="fade-right">
                  <img src={item.illustration} className={styles['highlight-illustration']} alt={'pudge'}/>
                  <div className={styles['highlight-content']}>
                    <h3 className={styles['highlight-title']}>{item.title}</h3>
                    <p className={styles['highlight-text']}>{item.text}</p>
                  </div>
                </li>
            );
          }else{
            return (
                <li key={i} className={styles.highlight} data-aos="fade-left">
                  <img src={item.illustration} className={styles['highlight-illustration']} alt={'pudge'}/>
                  <div className={styles['highlight-content']}>
                    <h3 className={styles['highlight-title']}>{item.title}</h3>
                    <p className={styles['highlight-text']}>{item.text}</p>
                  </div>
                </li>
            );
          }
        })}
      </ul>
    </Section>
  );
}
