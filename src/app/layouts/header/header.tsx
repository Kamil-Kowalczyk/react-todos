import styles from './header.module.scss';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className='container'>
      <h1 className={`h1 display-5 text-white mt-5 text-center ${styles['heading']}`}>Todo list</h1>
    </div>
  );
}

export default Header;
