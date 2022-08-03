import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import { DefaultLayout } from './components/Layout';
import NoMatch from './components/NoMatch';
import { publicRoutes } from './routes/publicRoutes';

export default function App() {
  function routesTree(root) {
    return (
      <>
        {root.map((route, key) => {
          const Element = route.element ? <route.element /> : route.url ? <Post url={route.url} /> : <></>;
          return (
            <Route key={key} path={route.path} element={Element}>
              {route.children ? routesTree(route.children) : <></>}
            </Route>
          );
        })}
        <Route path="*" element={<NoMatch />} />
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            {routesTree(publicRoutes)}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
