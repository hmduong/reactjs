import styles from './All.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const blogs = [
  {
    path: '/blog/daily/2022-06-15',
    title: "React Labs: What We've Been Working On – June 2022",
    date: 'JUNE 15, 2022',
    by: 'by Andrew Clark, Dan Abramov, Jan Kassens, Joseph Savona, Josh Story, Lauren Tan, Luna Ruan, Mengdi Chen, Rick Hanlon, Robert Zhang, Sathya Gunasekaran, Sebastian Markbåge, and Xuan Huang React v18.0 MARCH 29, 2022',
  },
  {
    path: '/blog/daily/2022-03-29',
    title: 'React v18.0',
    date: 'React v18.0',
    by: 'by The React Team',
  },
  {
    path: '/blog/daily/2022-03-08',
    title: 'How to Upgrade to React 18',
    date: 'MARCH 08, 2022',
    by: 'by Rick Hanlon',
  },
  {
    path: '/blog/daily/2021-12-17',
    title: 'React Conf 2021 Recap',
    date: 'DECEMBER 17, 2021',
    by: 'by Jesslyn Tannady and Rick Hanlon',
  },
  {
    path: '/blog/daily/2021-06-08',
    title: 'The Plan for React 18',
    date: 'JUNE 08, 2021',
    by: 'by Andrew Clark, Brian Vaughn, Christine Abernathy, Dan Abramov, Rachel Nabors, Rick Hanlon, Sebastian Markbåge, and Seth Webster',
  },
  {
    path: '/blog/daily/2020-12-21',
    title: 'Introducing Zero-Bundle-Size React Server Components',
    date: 'DECEMBER 21, 2020',
    by: 'by Dan Abramov, Lauren Tan, Joseph Savona, and Sebastian Markbåge',
  },
  {
    path: '/blog/daily/2020-10-20',
    title: 'React v17.0',
    date: 'OCTOBER 20, 2020',
    by: 'by Dan Abramov and Rachel Nabors',
  },
  {
    path: '/blog/daily/2020-09-22',
    title: 'Introducing the New JSX Transform',
    date: 'SEPTEMBER 22, 2020',
    by: 'by Luna Ruan',
  },
  {
    path: '/blog/daily/2020-08-10',
    title: 'React v17.0 Release Candidate: No New Features',
    date: 'AUGUST 10, 2020',
    by: 'by Dan Abramov and Rachel Nabors',
  },
  {
    path: '/blog/daily/2020-02-26',
    title: 'React v16.13.0',
    date: 'FEBRUARY 26, 2020',
    by: 'by Sunil Pai',
  },
  {
    path: '/blog/daily/2019-11-06',
    title: 'Building Great User Experiences with Concurrent Mode and Suspense',
    date: 'NOVEMBER 06, 2019',
    by: 'by Joseph Savona',
  },
  {
    path: '/blog/daily/2019-10-22',
    title: 'Preparing for the Future with React Prereleases',
    date: 'OCTOBER 22, 2019',
    by: 'by Andrew Clark',
  },
];

function All() {
  return (
    <div className="wrapper">
      <div className={cx('inner')}>
        <h1>All Posts</h1>
        <ul className={cx('list')}>
          {blogs.map((e, index) => (
            <li key={index}>
              <h2
                onClick={() => {
                  sessionStorage.setItem('sidebarState', '0 ' + (index < 10 ? index : index + 1));
                }}
              >
                <Link to={e.path}>{e.title}</Link>
              </h2>
              <div>{e.date}</div>
              <p>{e.by}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default All;
