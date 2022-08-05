import classNames from 'classnames/bind';
import { NextToIcon } from '~/components/SvgIcon';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <>
      <div className={cx('banner')}>
        <div className="wrapper">
          <div className={cx('inner')}>
            <h1>React</h1>
            <p>A JavaScript library for building user interfaces</p>
            <div className={cx('btns')}>
              <button className={cx('btn-left')}>Get Started</button>
              <button className={cx('btn-right')}>
                Take the Tutorial
                <NextToIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('descriptions')}>
        <div className="wrapper">
          <div className={cx('inner')}>
            <div className={cx('col')}>
              <h3>Declarative</h3>
              <div>
                <p>
                  React makes it painless to create interactive UIs. Design simple views for each state in your
                  application, and React will efficiently update and render just the right components when your data
                  changes.
                </p>
                <p>Declarative views make your code more predictable and easier to debug.</p>
              </div>
            </div>
            <div className={cx('col')}>
              <h3>Component-Based</h3>
              <div>
                <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
                <p>
                  Since component logic is written in JavaScript instead of templates, you can easily pass rich data
                  through your app and keep state out of the&nbsp;DOM.
                </p>
              </div>
            </div>
            <div className={cx('col')}>
              <h3>Learn&nbsp;Once, Write&nbsp;Anywhere</h3>
              <div>
                <p>
                  We don’t make assumptions about the rest of your technology stack, so you can develop new features in
                  React without rewriting existing code.
                </p>
                <p>
                  React can also render on the server using Node and power mobile apps using{' '}
                  <button>React Native</button>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div></div>
      <div></div>
    </>
  );
}

export default Home;
