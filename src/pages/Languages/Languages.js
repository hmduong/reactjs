import classNames from 'classnames/bind';
import styles from './Languages.module.scss';

const cx = classNames.bind(styles);

function Languages() {
  return (
    <div className="wrapper">
      <div className={cx('inner')}>
        <p>Languages</p>
      </div>
    </div>
  );
}

export default Languages;
