import Link from 'next/link';
import Image from 'next/image';
import styles from './NavMenu.module.css';
import { SignInButton, SignOutButton } from '@/components/buttons';

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <Image src='/siddur.svg' width={80} height={80} alt='next siddur' />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/dashboard'}>Dashboard</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
