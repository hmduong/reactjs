import styles from './All.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function All() {
  return (
    <div className="wrapper">
      <div className={cx('inner')}>
        <p>all</p>
      </div>
    </div>
  );
}

export default All;
