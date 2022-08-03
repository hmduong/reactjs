import { useEffect, useState } from 'react';
import { AngleIcon } from '~/components/SvgIcon';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Sidebar({ catalog, children }) {
  const [sidebarState, setSidebarState] = useState(sessionStorage.getItem('sidebarState') || '0 0');
  const [headingNumber, logNumber] = sidebarState.split(' ').map((char) => Number(char));
  const [currentHeading, setCurrentHeading] = useState(headingNumber);

  useEffect(() => {
    document.querySelector('.mark').classList.add('p-r-380');
    return () => {
      document.querySelector('.mark').classList.remove('p-r-380');
    };
  }, []);

  function handleHeading(headingIndex) {
    setCurrentHeading(headingIndex);
  }

  function handleLog(logIndex, headingIndex) {
    const state = headingIndex + ' ' + logIndex;
    sessionStorage.setItem('sidebarState', state);
    setSidebarState(state);
  }

  return (
    <>
      <article className={cx('content')}>{children}</article>
      <aside className={cx('sidebar')}>
        <div className={cx('container')}>
          <nav className={cx('nav')}>
            <ul>
              {catalog.map((log, headingIndex) => (
                <li key={headingIndex}>
                  <div className={cx('section')}>
                    <div className={currentHeading === headingIndex ? cx('heading-active') : ''}>
                      <h4 onClick={() => handleHeading(headingIndex)}>
                        {log.header}
                        <AngleIcon />
                      </h4>
                      <ul className={cx('css-ul')}>
                        {log.list.map((route, logIndex) => (
                          <li
                            key={logIndex}
                            className={
                              headingNumber === headingIndex && logNumber === logIndex ? cx('current-log') : ''
                            }
                            onClick={() => handleLog(logIndex, headingIndex)}
                          >
                            <span></span>
                            {route.internal ? (
                              <a href={route.path}>{route.title}</a>
                            ) : (
                              <Link onClick={() => sessionStorage.setItem('haveSidebar', false)} to={route.path}>
                                {route.title}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
