import classNames from 'classnames/bind';
import styles from './Languages.module.scss';

const cx = classNames.bind(styles);

function Languages() {
  return (
    <div className="wrapper">
      <div className={cx('inner')}>
        <h1>Languages</h1>
        <p>The React documentation is available in the following languages:</p>
        <ul>
          <li>
            <div>English</div>
            <div>
              <button className={cx('middle-button')}>English</button>
            </div>
            <div>
              <button>Contribute</button>
            </div>
          </li>
          <li>
            <div>Vietnamese</div>
            <div>
              <button className={cx('middle-button')}>Tiếng Việt</button>
            </div>
            <div>
              <button>Contribute</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Languages;
