import { Outlet } from 'react-router-dom';
import Sidebar from '~/components/Layout/components/Sidebar';
import styles from './Docs.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const docsCatalog = [
  {
    header: 'INSTALLATION',
    list: [
      { path: 'getting-started', internal: false, title: 'Getting Started' },
      { path: 'add-react-to-a-website', internal: false, title: 'Add React to a Website' },
      { path: 'create-a-new-react-app', internal: false, title: 'Creat a New React App' },
      { path: 'cdn-links', internal: false, title: 'CDN Links' },
      { path: 'release-channels', internal: false, title: 'Release Channels' },
    ],
  },
  {
    header: 'HOOKS',
    list: [
      { path: 'hooks-intro', internal: false, title: '1. Introducing Hooks' },
      { path: 'hooks-overview', internal: false, title: '2. Hooks at a Glance' },
      { path: 'hooks-state', internal: false, title: '3. Using the State Hook' },
      { path: 'hooks-effect', internal: false, title: '4. Using the Effect Hook' },
      { path: 'hooks-rules', internal: false, title: '5. Rules of Hooks' },
      { path: 'hooks-custom', internal: false, title: '6. Building Your Own Hooks' },
      { path: 'hooks-reference', internal: false, title: '7. Hooks API Reference' },
      { path: 'hooks-faq', internal: false, title: '8. Hooks FAQ' },
    ],
  },
  {
    header: 'TESTING',
    list: [
      { path: 'testing', internal: false, title: 'Testing Overview' },
      { path: 'testing-recipes', internal: false, title: 'Testing Recipes' },
      { path: 'testing-environments', internal: false, title: 'Testing Environments' },
    ],
  },
  {
    header: 'CONTRIBUTING',
    list: [
      { path: 'how-to-contribute', internal: false, title: 'How to Contribute' },
      { path: 'codebase-overview', internal: false, title: 'Codebase Overview' },
      { path: 'implementation-notes', internal: false, title: 'Implementation Notes' },
      { path: 'design-principles', internal: false, title: 'Design Principles' },
    ],
  },
  {
    header: 'FAQ',
    list: [
      { path: 'faq-ajax', internal: false, title: 'AJAX and APIs' },
      { path: 'faq-build', internal: false, title: 'Babel, JSX, and Build Steps' },
      { path: 'faq-functions', internal: false, title: 'Passing Functions to Components' },
      { path: 'faq-state', internal: false, title: 'Component State' },
      { path: 'faq-styling', internal: false, title: 'Styling and CSS' },
      { path: 'faq-structure', internal: false, title: 'File Structure' },
      { path: 'faq-versioning', internal: false, title: 'Versioning Policy' },
      { path: 'faq-internals', internal: false, title: 'Virtual DOM and Internals' },
    ],
  },
];

export default function Docs() {
  return (
    <div className="wrapper">
      <div className={cx('inner')}>
        <Sidebar catalog={docsCatalog}>
          <Outlet />
        </Sidebar>
      </div>
    </div>
  );
}
