import styles from './Epilogue.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import SubscribeInput from '../components/SubscribeInput';
import Link from "next/link";

export default function Epilogue(p: {
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
    <Section id={p.id} className={className} background="accent">
      <div  data-aos="flip-up"  data-aos-delay="300">

      <img src={p.illustration} className={styles.illustration} alt={'pudge'}/>
      </div>

      <div  data-aos="fade-down"  data-aos-delay="200">

      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <div className={styles.subtitle}>{p.subtitle}</div>
        {p.subscribeAction && <SubscribeInput className={styles.subscribe} location="accent" placeholder={p.subscribePlaceholder} action={p.subscribeAction}/>}
      </div>
      </div>
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center',marginTop: '30px'}}>
            <Link href='https://t.me/cryptopudgeTON'>
                <img src="/socials/telegram.png" alt="telegram" className={styles.social}/>
            </Link>
            <Link href='#'>
                <img src="/socials/x.webp" alt="x" className={styles.social}/>
            </Link>
        </div>

    </Section>
  );
}
