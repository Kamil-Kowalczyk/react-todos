import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './icon-button.module.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IconButtonProps {
  onClick: () => void
  icon: IconProp
  style?: {
    button?: React.CSSProperties
    icon?: React.CSSProperties
  }
}

export function IconButton({ onClick, icon, style }: IconButtonProps) {
  return (
    <button 
      className={`btn`}
      onClick={() => onClick()} 
      style={style?.button}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`${styles['icon']} d-flex`}
        style={style?.icon}
      />
    </button>
  );
}

export default IconButton;
