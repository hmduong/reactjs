import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className="wrapper">
      <div className={cx('inner')}>
        <p>home</p>
      </div>
    </div>
  );
}

export default Home;
