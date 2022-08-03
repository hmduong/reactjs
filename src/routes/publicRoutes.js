//elements
import Home from '~/pages/Home';
import Docs from '~/pages/Docs';
import Tutorial from '~/pages/Tutorial';
import Blog from '~/pages/Blog';
import Community from '~/pages/Community';
import Version from '~/pages/Version';
import Languages from '~/pages/Languages';
import Daily from '~/pages/Blog/Daily';
import All from '~/pages/Blog/All';

// const docsPaths = [];

// const docsUrls = [];

const docsRoutes = [
  {
    path: 'getting-started',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/getting-started.md',
  },
  {
    path: 'add-react-to-a-website',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/add-react-to-a-website.md',
  },
  {
    path: 'create-a-new-react-app',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/create-a-new-react-app.md',
  },
  {
    path: 'cdn-links',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/cdn-links.md',
  },
  {
    path: 'release-channels',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/release-channels.md',
  },
  {
    path: 'hooks-overview',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/hooks-intro.md',
  },
  {
    path: 'hooks-state',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/hooks-state.md',
  },
  {
    path: 'hooks-effect',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/hooks-effect.md',
  },
  {
    path: 'hooks-rules',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/hooks-rules.md',
  },
  {
    path: 'hooks-custom',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/hooks-custom.md',
  },
  {
    path: 'hooks-reference',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/hooks-reference.md',
  },
  {
    path: 'hooks-faq',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/hooks-faq.md',
  },
  {
    path: 'testing',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/testing.md',
  },
  {
    path: 'testing-recipes',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/testing-recipes.md',
  },
  {
    path: 'testing-environments',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/testing-environments.md',
  },
  {
    path: 'how-to-contribute',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/how-to-contribute.md',
  },
  {
    path: 'codebase-overview',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/codebase-overview.md',
  },
  {
    path: 'implementation-notes',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/implementation-notes.md',
  },
  {
    path: 'design-principles',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/design-principles.md',
  },
  {
    path: 'faq-ajax',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/faq-ajax.md',
  },
  {
    path: 'faq-build',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/faq-build.md',
  },
  {
    path: 'faq-functions',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/faq-functions.md',
  },
  {
    path: 'faq-state',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/faq-state.md',
  },
  {
    path: 'faq-styling',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/faq-styling.md',
  },
  {
    path: 'faq-structure',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/faq-structure.md',
  },
  {
    path: 'faq-versioning',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/faq-versioning.md',
  },
  {
    path: 'faq-internals',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/docs/faq-internals.md',
  },
];

const communityRoutes = [
  {
    path: 'support',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/community/support.md',
  },
  {
    path: 'team',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/community/team.md',
  },
  {
    path: 'courses',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/community/courses.md',
  },
  {
    path: 'examples',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/community/examples.md',
  },
  {
    path: 'meetups',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/community/meetups.md',
  },
  {
    path: 'conferences',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/community/conferences.md',
  },
  {
    path: 'articles',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/community/articles.md',
  },
  {
    path: 'podcasts',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/community/podcasts.md',
  },
  {
    path: 'external-resources',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/community/external-resources.md',
  },
];

const dailyBlog = [
  {
    path: '2022-06-15',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/blog/2022-06-15-react-labs-what-we-have-been-working-on-june-2022.md',
  },
  {
    path: '2022-03-29',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/blog/2022-03-29-react-v18.md',
  },
  {
    path: '2022-03-08',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/blog/2022-03-08-react-18-upgrade-guide.md',
  },
  {
    path: '2021-12-17',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/blog/2021-12-17-react-conf-2021-recap.md',
  },
  {
    path: '2021-06-08',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/blog/2021-06-08-the-plan-for-react-18.md',
  },
  {
    path: '2020-12-21',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/blog/2020-12-21-data-fetching-with-react-server-components.md',
  },
  {
    path: '2020-10-20',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/blog/2020-10-20-react-v17.md',
  },
  {
    path: '2020-09-22',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/blog/2020-09-22-introducing-the-new-jsx-transform.md',
  },
  {
    path: '2020-08-10',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/blog/2020-08-10-react-v17-rc.md',
  },
  {
    path: '2020-02-26',
    url: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/content/blog/2020-02-26-react-v16.13.0.md',
  },
];

const blogRoutes = [
  { path: 'daily', element: Daily, children: dailyBlog },
  { path: 'all', element: All },
];

export const publicRoutes = [
  { path: '/', element: Home },
  { path: 'docs', element: Docs, children: docsRoutes },
  { path: 'tutorial', element: Tutorial },
  { path: 'blog', element: Blog, children: blogRoutes },
  { path: 'community', element: Community, children: communityRoutes },
  { path: 'version', element: Version },
  { path: 'languages', element: Languages },
];
