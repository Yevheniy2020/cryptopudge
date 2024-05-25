import styles from './Header.module.css';
import Button from '../components/Button';
import cx from '../utils/cx';
import Link from "next/link";

export default function Header(p: {
  id?: string,
  className?: string,
  title: string,
  action?: string,
  actionHref?: string,
  onActionClick?(): void,
}) {
  const id = p.id ?? 'top';

  const className = cx(
    styles.container,
    p.className,
  );
  return (
    <header id={id}  className={className}>
      <div className={styles.content}>
       <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',gap: '10px'}}>
           <img style={{width: '80px', height: '80px', borderRadius: '50%'}} src="/logo.png" alt="logo"/>
           <div className={styles.title} title={p.title}>{p.title}</div>
       </div>
         <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
             <Link href='https://t.me/cryptopudgeTON'>
                 <img src="/socials/telegram.png" alt="telegram" className={styles.social}/>
             </Link>
             <Link href='#'>
                 <img src="/socials/x.webp" alt="x" className={styles.social}/>
             </Link>
         </div>

          {p.action && <Button href={p.actionHref} onClick={p.onActionClick} type="secondary">{p.action}</Button>}
      </div>
    </header>
  );
}
