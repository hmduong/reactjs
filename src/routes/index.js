//pages
import Home from '~/pages/Home';
import News from '~/pages/News';
import About from '~/pages/Docs';

//layouts
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
  { path: '/', page: Home },
  { path: '/News', page: News, layout: HeaderOnly },
  { path: '/About', page: About, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
