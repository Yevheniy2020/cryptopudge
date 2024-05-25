import styles from './Hero.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import Link from "next/link";

export default function Hero(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  illustration: string,
  subscribePlaceholder?: string,
  subscribeAction?: string,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} >
      <img className={styles.illustration} src={p.illustration} alt="main img, pudge hook coin"/>
        <div data-aos="fade-up"  data-aos-delay="200">

        <div className={styles.header}>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
        <Link href='#'>
          <img src="/socials/telegram.png" alt="telegram" className={styles.social}/>
        </Link>
        <Link href='#'>
          <img src="/socials/x.webp" alt="x" className={styles.social}/>
        </Link>
      </div>
            </div>


    </Section>
  );
}
