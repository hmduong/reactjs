import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LangIcon } from '~/components/SvgIcon';
import External from '~/components/External';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Header() {
  const [page, setPage] = useState(sessionStorage.getItem('page') || 'none');

  function handlePage(nextPage) {
    setPage(nextPage);
    sessionStorage.setItem('page', nextPage);
    sessionStorage.setItem('sidebarState', '0 0');
  }

  return (
    <>
      <header className={cx('header')}>
        <div className={cx('slogan')}>
          <div className="wrapper">
            <div className={cx('inner')}>
              Support Ukraine 🇺🇦
              <a
                target="_External"
                rel="noreferrer"
                href="https://www.facebook.com/fundraisers/explore/search/charities/?query=ukraine"
              >
                Help Provide Humanitarian Aid to Ukraine.
              </a>
            </div>
          </div>
        </div>
        <div className={cx('actions')}>
          <div className="wrapper">
            <div className={cx('inner')}>
              <Link onClick={() => handlePage('home')} className={cx('home')} to="/">
                <i className="fa-brands fa-react"></i>
                <span>React</span>
              </Link>
              <nav className={cx('navigations')}>
                <Link onClick={() => handlePage('docs')} to="/docs/getting-started">
                  {page === 'docs' ? (
                    <div className={cx('current')}>
                      <p>Docs</p>
                      <span></span>
                    </div>
                  ) : (
                    <p>Docs</p>
                  )}
                </Link>
                <Link onClick={() => handlePage('tutorial')} to="/tutorial">
                  {page === 'tutorial' ? (
                    <div className={cx('current')}>
                      <p>Tutorial</p>
                      <span></span>
                    </div>
                  ) : (
                    <p>Tutorial</p>
                  )}
                </Link>
                <Link onClick={() => handlePage('blog')} to="/blog/daily/2022-06-15">
                  {page === 'blog' ? (
                    <div className={cx('current')}>
                      <p>Blog</p>
                      <span></span>
                    </div>
                  ) : (
                    <p>Blog</p>
                  )}
                </Link>
                <Link onClick={() => handlePage('community')} to="/community/support">
                  {page === 'community' ? (
                    <div className={cx('current')}>
                      <p>Community</p>
                      <span></span>
                    </div>
                  ) : (
                    <p>Community</p>
                  )}
                </Link>
              </nav>
              <form className={cx('search')}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search" autoComplete="off" spellCheck="false" />
              </form>
              <div className={cx('contributer')}>
                <Link onClick={() => handlePage('none')} to="version">
                  v18.2.0
                </Link>
                <Link onClick={() => handlePage('none')} to="/languages" className={cx('lang')}>
                  <LangIcon /> Languages
                </Link>
                <External to="https://github.com/facebook/react/">GitHub</External>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={cx('buffer')}></div>
    </>
  );
}
