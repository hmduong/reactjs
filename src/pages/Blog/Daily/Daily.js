import { Outlet } from 'react-router-dom';
import Sidebar from '~/components/Layout/components/Sidebar';
import styles from './Daily.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const blogCatalog = [
  {
    header: 'RECENT POSTS',
    list: [
      { path: '2022-06-15', internal: false, title: "React Labs: What We've Been Working On – June 2022" },
      { path: '2022-03-29', internal: false, title: 'React v18.0' },
      { path: '2022-03-08', internal: false, title: 'How to Upgrade to React 18' },
      { path: '2021-12-17', internal: false, title: 'React Conf 2021 Recap' },
      { path: '2021-06-08', internal: false, title: 'The Plan for React 18' },
      { path: '2020-12-21', internal: false, title: 'Introducing Zero-Bundle-Size React Server Components' },
      { path: '2020-10-20', internal: false, title: 'React v17.0' },
      { path: '2020-09-22', internal: false, title: 'Introducing the New JSX Transform' },
      { path: '2020-08-10', internal: false, title: 'React v17.0 Release Candidate: No New Features' },
      { path: '2020-02-26', internal: false, title: 'React v16.13.0' },
      { path: '/blog/all', internal: false, title: 'All posts ...' },
    ],
  },
];

function Daily() {
  return (
    <div className="wrapper">
      <div className={cx('inner')}>
        <Sidebar catalog={blogCatalog}>
          <Outlet />
        </Sidebar>
      </div>
    </div>
  );
}

export default Daily;
