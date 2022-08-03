import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div>
      <h1>404 NOT FOUND!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
