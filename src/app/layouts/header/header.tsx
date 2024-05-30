import styles from './header.module.scss';
import 'boostrap'

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <h1 className=''>Todo list</h1>
    </div>
  );
}

export default Header;
