import { ExternalIcon } from '../SvgIcon';
import styles from './External.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function External({ to, children }) {
  return (
    <a target="_external" rel="noreferrer" className={cx('external')} href={to}>
      {children}
      <ExternalIcon />
    </a>
  );
}
