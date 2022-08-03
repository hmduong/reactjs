import { Outlet } from 'react-router-dom';
import Sidebar from '~/components/Layout/components/Sidebar';
import styles from './Community.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const communityCatalog = [
  {
    header: 'COMMUNITY RESOURCES',
    list: [
      { path: 'support', internal: false, title: 'Support' },
      { path: 'team', internal: false, title: 'Team' },
      { path: 'courses', internal: false, title: 'Courses' },
      { path: 'examples', internal: false, title: 'Examples' },
      { path: 'meetups', internal: false, title: 'Meetups' },
      { path: 'conferences', internal: false, title: 'Conferences' },
      { path: 'articles', internal: false, title: 'Articles' },
      { path: 'podcasts', internal: false, title: 'Podcasts' },
      { path: 'external-resources', internal: false, title: 'External Resources' },
    ],
  },
];

function Community() {
  return (
    <div className="wrapper">
      <div className={cx('inner')}>
        <Sidebar catalog={communityCatalog}>
          <Outlet />
        </Sidebar>
      </div>
    </div>
  );
}

export default Community;
