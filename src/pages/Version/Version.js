import classNames from 'classnames/bind';
import styles from './Version.module.scss';

const cx = classNames.bind(styles);

function Version() {
  return (
    <div className="wrapper">
      <div className={cx('inner')}>
        <p>Version</p>
      </div>
    </div>
  );
}

export default Version;
