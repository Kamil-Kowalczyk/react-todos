import styles from './body.module.scss';
import Todos from '../../components/todos/todos';

export interface MainHolderProps {}

export function MainHolder(props: MainHolderProps) {
  return (
    <div className='container pt-5'>
      <Todos />
    </div>
  );
}

export default MainHolder;
