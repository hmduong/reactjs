import classNames from 'classnames/bind';
import styles from './Version.module.scss';

const cx = classNames.bind(styles);

const versions = ['18.2.0', '18.1.0', '18.0.0', '17.0.2', '17.0.1', '17.0.0'];

function Version() {
  return (
    <div className="wrapper">
      <div className={cx('inner')}>
        <h1>React Versions</h1>
        <p>
          A complete release history for React is available
          <a rel="noreferrer" href="https://github.com/facebook/react/releases" target="_blank">
            on GitHub
          </a>
          .<br />
          Changelogs for recent releases can also be found below.
        </p>
        <blockquote>
          <p>Note</p>
          <p>
            The current docs are for React 18. For React 17, see
            <a rel="noreferrer" href="https://17.reactjs.org">
              https://17.reactjs.org.
            </a>
          </p>
        </blockquote>
        <p>
          See our FAQ for information about
          <a rel="noreferrer" href="/docs/faq-versioning.html">
            our versioning policy and commitment to stability
          </a>
          .
        </p>
        <ul>
          {versions.map((e, index) => (
            <li key={index}>
              <h3>{e}</h3>
              <ol>
                <li>
                  <button>Changelog</button>
                </li>
              </ol>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Version;
