import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import External from '~/components/External';
import { Link } from 'react-router-dom';
import TmIcon from '~/components/SvgIcon/SvgIcon';

const listConcept = [
  {
    heading: 'DOCS',
    list: [
      { path: '/docs/chapter1', blank: false, title: 'chapter1' },
      { path: '/docs/chapter1', blank: false, title: 'chapter1' },
      { path: '/docs/chapter1', blank: false, title: 'chapter1' },
    ],
  },
  {
    heading: 'CHANNELS',
    list: [
      { path: 'https://github.com/facebook/react/', blank: true, title: 'GitHub' },
      { path: 'https://github.com/facebook/react/', blank: true, title: 'GitHub' },
      { path: 'https://github.com/facebook/react/', blank: true, title: 'GitHub' },
    ],
  },
  {
    heading: 'COMMUNITY',
    list: [
      { path: 'https://github.com/facebook/react/', blank: true, title: 'GitHub' },
      { path: '/docs/chapter1', blank: false, title: 'chapter1' },
      { path: 'https://github.com/facebook/react/', blank: true, title: 'GitHub' },
    ],
  },
  {
    heading: 'MORE',
    list: [
      { path: '/docs/chapter1', blank: false, title: 'chapter1' },
      { path: 'https://github.com/facebook/react/', blank: true, title: 'GitHub' },
      { path: '/docs/chapter1', blank: false, title: 'chapter1' },
    ],
  },
];

const cx = classNames.bind(styles);
export default function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className="wrapper">
        <section className={cx('inner') + ' mark'}>
          <div className={cx('copy-right')}>
            <a href="https://opensource.fb.com/projects/">
              <TmIcon />
            </a>
            <p>Copyright © 2022 Meta Platforms, Inc.</p>
          </div>
          <div className={cx('concept')}>
            {listConcept.map((concept, index) => (
              <div key={index}>
                <h4>{concept.heading}</h4>
                <ul className={cx('list')}>
                  {concept.list.map((link, index) => (
                    <li key={index}>
                      {link.blank ? (
                        <External to={link.path}>{link.title}</External>
                      ) : (
                        <Link to={link.path}>{link.title}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
