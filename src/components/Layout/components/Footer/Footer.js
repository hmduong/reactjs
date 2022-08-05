import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import External from '~/components/External';
import { Link } from 'react-router-dom';
import { TmIcon } from '~/components/SvgIcon';

const listConcept = [
  {
    heading: 'DOCS',
    list: [
      { path: '/docs/getting-started', blank: false, title: 'Installation', to: 'docs' },
      { path: '/docs/hooks-intro', blank: false, title: 'Hooks', to: 'docs' },
      { path: '/docs/testing', blank: false, title: 'Testing', to: 'docs' },
      { path: '/docs/how-to-contribute', blank: false, title: 'Contributing', to: 'docs' },
      { path: '/docs/faq-ajax', blank: false, title: 'FAQ', to: 'docs' },
    ],
  },
  {
    heading: 'CHANNELS',
    list: [
      { path: 'https://github.com/facebook/react/', blank: true, title: 'GitHub' },
      { path: 'https://stackoverflow.com/questions/tagged/reactjs', blank: true, title: 'Stack Overflow' },
      { path: 'https://discord.com/invite/reactiflux', blank: true, title: 'Reactiflux Chat' },
      { path: 'https://dev.to/t/react', blank: true, title: 'DEV Community' },
      { path: 'https://www.facebook.com/react', blank: true, title: 'Facebook' },
      { path: 'https://twitter.com/reactjs', blank: true, title: 'Twitter' },
    ],
  },
  {
    heading: 'COMMUNITY',
    list: [
      { path: 'https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md', blank: true, title: 'Code of Conduct' },
      { path: '/community/support', blank: false, title: 'Community Resources' },
    ],
  },
  {
    heading: 'MORE',
    list: [
      { path: '/tutorial', blank: false, title: 'Tutorial' },
      { path: '/blog/daily/2022-06-15', blank: false, title: 'Blogs' },
      { path: 'https://reactnative.dev/', blank: true, title: 'React Native' },
      { path: 'https://opensource.fb.com/legal/privacy/', blank: true, title: 'Privacy' },
      { path: 'https://opensource.fb.com/legal/terms/', blank: true, title: 'Terms' },
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
                        <Link onClick={() => sessionStorage.setItem('page', link.to || 'none')} to={link.path}>
                          {link.title}
                        </Link>
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
