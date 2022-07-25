//components
import Header from '~/components/Layout/components/Header';
import Sidebar from '~/components/Layout/components/Sidebar';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
}

export default DefaultLayout;
