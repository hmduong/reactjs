import clsx from 'clsx';
import '~/components/User';
import User from '~/components/User';

function Home() {
  return (
    <div className={clsx('Home')}>
      <h2>Home page</h2>
      <User />
    </div>
  );
}

export default Home;
